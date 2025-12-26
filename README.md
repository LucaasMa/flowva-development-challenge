# Flowva Rewards System

A modern web application for managing user rewards with daily point claiming, streak tracking, and reward redemption features.

## Features

- **User Authentication**: Secure email/password authentication with Supabase
- **Daily Points Claiming**: Users can claim 5 points once every 24 hours
- **Streak Tracking**: Visual daily streak system with week calendar
- **Rewards Redemption**: Browse and unlock rewards with earned points
- **Protected Routes**: Secure routes requiring authentication
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tools & Technologies

- **[React 18](https://react.dev/)**: UI library with TypeScript support
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe development
- **[Vite](https://vite.dev/)**: Fast build tool and dev server
- **[TanStack Router](https://tanstack.com/router)**: Type-safe routing with route protection
- **[Supabase](https://supabase.com/)**: Authentication and PostgreSQL database
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Lottie](https://lottiefiles.com/)**: Animations
- **[pnpm](https://pnpm.io/)**: Fast, disk space efficient package manager

## Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)
- Supabase account ([sign up here](https://supabase.com))

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Supabase

Create a new project in [Supabase Dashboard](https://app.supabase.com).

#### Create the Profiles Table

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  referral_code TEXT UNIQUE NOT NULL DEFAULT gen_random_uuid()::text,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  total_points INTEGER DEFAULT 0,
  referral_count INTEGER DEFAULT 0,
  last_claim_date TIMESTAMP WITH TIME ZONE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  interest TEXT,
  goal TEXT,
  tools TEXT[],
  role TEXT[],
  country TEXT,
  city TEXT,
  flag TEXT,
  country_code TEXT,
  country_code_iso3 TEXT,
  is_author BOOLEAN DEFAULT false
);

-- Create an index on email for faster lookups
CREATE INDEX idx_profiles_email ON profiles(email);

-- Create a trigger to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

#### Enable Email Authentication

1. Go to Authentication > Providers in Supabase Dashboard
2. Enable Email provider
3. Configure email settings (or use default for development)

### 4. Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
```

Get these values from:
- Supabase Dashboard → Settings → API
- `VITE_SUPABASE_URL`: Project URL
- `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`: anon/public key

### 5. Run Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
pnpm build
```

The production build will be in the `dist/` directory.

To preview the production build locally:

```bash
pnpm preview
```

## Deployment

### Deploying to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variables in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

The `vercel.json` file is already configured to handle client-side routing.

## Project Structure

```
src/
├── routes/               # TanStack Router routes
│   ├── index.tsx        # Root route (redirects to /signin)
│   ├── signin.tsx       # Login page route
│   ├── signup.tsx       # Signup page route
│   └── earn-rewards.tsx # Protected rewards page route
├── templates/           # Page templates/components
│   ├── Login.template.tsx
│   ├── Signup.template.tsx
│   └── Rewards.template.tsx
├── utils/               # Utility functions
│   ├── supabase.ts     # Supabase client configuration
│   └── api.ts          # API functions (getUserProfile, addPoints, etc.)
└── main.tsx            # Application entry point
```

## Key Features Implementation

### Authentication

- Email/password signup with duplicate email detection
- Secure login with session management
- Password visibility toggle
- Email verification support

### Route Protection

Protected routes use `beforeLoad` hook to check authentication:

```typescript
beforeLoad: async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    throw redirect({ to: "/signin" });
  }
}
```

### Daily Points System

- Users can claim 5 points once every 24 hours
- Cooldown timer shows remaining time until next claim
- Points are automatically added to user's `total_points`

### Streak Tracking

- Consecutive daily claims increase streak count
- Visual week calendar shows current day and claim status
- Longest streak is tracked and displayed
- Streak resets if a day is missed

## Database Schema

The `profiles` table stores user data:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| email | TEXT | User email (unique) |
| full_name | TEXT | User's full name |
| avatar_url | TEXT | Profile picture URL |
| referral_code | TEXT | Unique referral code |
| total_points | INTEGER | Accumulated points |
| last_claim_date | TIMESTAMP | Last point claim time |
| current_streak | INTEGER | Current daily streak |
| longest_streak | INTEGER | Longest streak achieved |

## API Functions

### `getUserProfile()`
Fetches authenticated user's profile data from the `profiles` table.

### `addPoints(pointsToAdd: number)`
Adds points to user's total, updates streak, and enforces 24-hour cooldown.

### `canClaimToday(lastClaimDate: string | null)`
Checks if 24 hours have passed since last claim.

### `getTimeUntilNextClaim(lastClaimDate: string | null)`
Returns formatted time remaining until next claim is available.

## License

MIT
