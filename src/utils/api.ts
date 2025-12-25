import supabase from "./supabase";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  referral_code: string;
  created_at: string;
  updated_at: string;
  // Optional fields that might be added later
  total_points?: number;
  referral_count?: number;
  last_claim_date?: string | null;
  current_streak?: number;
  longest_streak?: number;
  interest?: string;
  goal?: string;
  tools?: string[];
  role?: string[];
  country?: string;
  city?: string;
  flag?: string;
  country_code?: string;
  country_code_iso3?: string;
  is_author?: boolean;
}

export const getUserProfile = async (): Promise<UserProfile | null> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("No authenticated user");
    }

    // Try to match by email first, then by id
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", user.email)
      .single();

    if (error) {
      // If email doesn't work, try matching by id column directly
      const { data: dataById, error: errorById } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (errorById) throw errorById;
      return dataById as UserProfile;
    }

    return data as UserProfile;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const canClaimToday = (lastClaimDate: string | null): boolean => {
  if (!lastClaimDate) return true;

  const lastClaim = new Date(lastClaimDate);
  const now = new Date();
  const diffInHours = (now.getTime() - lastClaim.getTime()) / (1000 * 60 * 60);

  return diffInHours >= 24;
};

export const getTimeUntilNextClaim = (lastClaimDate: string | null): string => {
  if (!lastClaimDate) return "Available now";

  const lastClaim = new Date(lastClaimDate);
  const now = new Date();
  const nextClaim = new Date(lastClaim.getTime() + 24 * 60 * 60 * 1000);
  const diffInMs = nextClaim.getTime() - now.getTime();

  if (diffInMs <= 0) return "Available now";

  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

const calculateStreak = (lastClaimDate: string | null, currentStreak: number = 0): { newStreak: number; isConsecutive: boolean } => {
  if (!lastClaimDate) {
    return { newStreak: 1, isConsecutive: false };
  }

  const lastClaim = new Date(lastClaimDate);
  const now = new Date();

  // Reset both dates to start of day for accurate day comparison
  lastClaim.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diffInDays = Math.floor((now.getTime() - lastClaim.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 1) {
    // Consecutive day
    return { newStreak: currentStreak + 1, isConsecutive: true };
  } else if (diffInDays > 1) {
    // Streak broken, start over
    return { newStreak: 1, isConsecutive: false };
  } else {
    // Same day (shouldn't happen with 24h check, but just in case)
    return { newStreak: currentStreak, isConsecutive: false };
  }
};

export const addPoints = async (pointsToAdd: number): Promise<{ success: boolean; newTotal?: number; error?: string }> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("No authenticated user");
    }

    // Get current profile
    const profile = await getUserProfile();

    if (!profile) {
      throw new Error("Profile not found");
    }

    // Check if user can claim today
    if (!canClaimToday(profile.last_claim_date || null)) {
      return {
        success: false,
        error: "You can only claim points once every 24 hours"
      };
    }

    const currentPoints = profile.total_points || 0;
    const newTotal = currentPoints + pointsToAdd;

    // Calculate streak
    const { newStreak } = calculateStreak(
      profile.last_claim_date || null,
      profile.current_streak || 0
    );

    const longestStreak = Math.max(newStreak, profile.longest_streak || 0);

    // Update points, last claim date, and streak in database
    const { error } = await supabase
      .from("profiles")
      .update({
        total_points: newTotal,
        last_claim_date: new Date().toISOString(),
        current_streak: newStreak,
        longest_streak: longestStreak
      })
      .eq("email", user.email);

    if (error) throw error;

    return { success: true, newTotal };
  } catch (error) {
    console.error("Error adding points:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to add points"
    };
  }
};
