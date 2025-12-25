import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import supabase from "../utils/supabase";

const SignupTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        if (data.user.identities && data.user.identities.length === 0) {
          setError("An account with this email already exists");
        } else {
          setSuccess(true);
          setTimeout(() => {
            navigate({ to: "/signin" });
          }, 2000);
        }
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred during signup");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-[100dvh] flex justify-center py-[20px] px-3 items-center bg-gradient-to-br from-[#9013fe] to-[#6D28D9]">
      <div className="flex justify-center w-full max-w-[420px]">
        <div className="w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] py-[30px] px-[20px] lg:p-[40px] bg-white rounded-[10px] animate-fadeIn h-fit">
          <div className="mb-[30px]">
            <h1 className="text-2xl text-[#6D28D9] font-semibold mb-[8px] text-center w-full">
              Create Your Account
            </h1>
            <p className="text-sm text-[#6B7280] text-center w-full">
              Sign up to manage your tools
            </p>
          </div>
          <div className="w-full">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
                Account created successfully! Please check your email to verify your account. Redirecting to login...
              </div>
            )}
            <form className="w-full text-[#111827]" onSubmit={handleSignup}>
              <label
                htmlFor="email"
                className="block text-sm font-normal mb-2 text-[#111827]"
              >
                Email
              </label>
              <div className="relative group w-full mb-5">
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full border text-base py-[11px] px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]"
                  required
                  disabled={loading || success}
                />
                <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
              </div>
              <label
                htmlFor="password"
                className="block text-sm font-normal mb-2 text-[#111827]"
              >
                Password
              </label>
              <div className="relative mb-5">
                <div className="relative group w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer w-full border py-[11px] text-base px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]"
                    required
                    disabled={loading || success}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 border-none text-[#A78BFA] h-fit font-normal text-xs top-0 bottom-0 m-auto"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-normal mb-2 text-[#111827]"
              >
                Confirm Password
              </label>
              <div className="relative mb-5">
                <div className="relative group w-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="peer w-full border py-[11px] text-base px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]"
                    required
                    disabled={loading || success}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 border-none text-[#A78BFA] h-fit font-normal text-xs top-0 bottom-0 m-auto"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              <button
                type="submit"
                disabled={loading || success}
                className="w-full h-[55px] gap-2 flex justify-center text-base items-center p-[11px] text-center bg-[#9013FE] text-white font-medium border-none transition-colors ease-linear duration-[.2s] rounded-[100px] hover:bg-[#6D28D9] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Sign up Account"}
              </button>
            </form>
            <div className="text-center mt-5 text-sm">
              <p className="text-[#6B7280]">
                Already have an account{" "}
                <a
                  href="/signin"
                  className="text-[#9013fe] no-underline font-normal hover:underline"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupTemplate;
