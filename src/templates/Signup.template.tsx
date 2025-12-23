const SignupTemplate = () => {
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
            <form className="w-full text-[#111827]">
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
                  className="peer w-full border text-base py-[11px] px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]"
                  required
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
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="peer w-full border py-[11px] text-base px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]"
                    required
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                </div>
                <button
                  type="button"
                  className="absolute right-3 border-none text-[#A78BFA] h-fit font-normal text-xs top-0 bottom-0 m-auto"
                >
                  Show
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
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="peer w-full border py-[11px] text-base px-[14px] border-[#EDE9FE] transition-all ease-linear duration-[.2s] rounded-md outline-none focus:border-[#9013fe]"
                    required
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
                </div>
                <button
                  type="button"
                  className="absolute right-3 border-none text-[#A78BFA] h-fit font-normal text-xs top-0 bottom-0 m-auto"
                >
                  Show
                </button>
              </div>
              <button
                type="submit"
                className="w-full h-[55px] gap-2 flex justify-center text-base items-center p-[11px] text-center bg-[#9013FE] text-white font-medium border-none transition-colors ease-linear duration-[.2s] rounded-[100px] hover:bg-[#6D28D9]"
              >
                Sign up Account
              </button>
            </form>
            <div className="relative flex items-center w-full my-[20px]">
              <div className="flex-grow h-px bg-[#EDE9FE]"></div>
              <span className="text-[13px] text-[#A78BFA] font-medium bg-white px-3">
                or
              </span>
              <div className="flex-grow h-px bg-[#EDE9FE]"></div>
            </div>
            <button className="border py-[11px] px-[14px] text-sm w-full gap-2 text-[#111827] border-[#EDE9FE] rounded-md hover:bg-[#F5F3FF] transition-colors flex items-center justify-center relative">
              <img
                src="data:image/svg+xml,%3csvg%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1888%2014.7814C27.1888%2013.7382%2027.1024%2012.9769%2026.9155%2012.1875H14.7603V16.8959H21.8951C21.7513%2018.066%2020.9745%2019.8282%2019.2483%2021.0123L19.2241%2021.1699L23.0674%2024.0877L23.3336%2024.1137C25.779%2021.9005%2027.1888%2018.644%2027.1888%2014.7814Z'%20fill='%234285F4'/%3e%3cpath%20d='M14.7593%2027.1871C18.2548%2027.1871%2021.1893%2026.0592%2023.3327%2024.1139L19.2474%2021.0124C18.1541%2021.7595%2016.6868%2022.2811%2014.7593%2022.2811C11.3357%2022.2811%208.43002%2020.0679%207.39421%2017.0088L7.24238%2017.0214L3.24611%2020.0524L3.19385%2020.1947C5.32279%2024.3393%209.69579%2027.1871%2014.7593%2027.1871Z'%20fill='%2334A853'/%3e%3cpath%20d='M7.39501%2017.0095C7.1217%2016.2201%206.96353%2015.3742%206.96353%2014.5002C6.96353%2013.6261%207.1217%2012.7803%207.38063%2011.9909L7.37339%2011.8228L3.32703%208.74316L3.19464%208.80488C2.3172%2010.5248%201.81372%2012.4561%201.81372%2014.5002C1.81372%2016.5443%202.3172%2018.4756%203.19464%2020.1954L7.39501%2017.0095Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M14.7594%206.7183C17.1904%206.7183%2018.8302%207.74739%2019.7653%208.60738L23.4191%205.11125C21.1751%203.06716%2018.2549%201.8125%2014.7594%201.8125C9.69583%201.8125%205.3228%204.66012%203.19385%208.80467L7.37985%2011.9907C8.43004%208.93159%2011.3358%206.7183%2014.7594%206.7183Z'%20fill='%23EB4335'/%3e%3c/svg%3e"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </button>
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
