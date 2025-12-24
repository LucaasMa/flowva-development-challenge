import { useState } from "react";

const RewardsTemplate = () => {
  const [activeTab, setActiveTab] = useState("earn");

  return (
    <div className="flex flex-col md:flex-row min-h-[100dvh] lg:h-screen  lg:md:overflow-hidden w-full">
      {/* Sidebar */}
      <aside className="w-72 overflow-x-hidden flex flex-col h-screen shadow-md border-r border-black/10 text-black font-sans">
        <div className="flex flex-col h-full">
          <div className="p-2 px-7  my-2 flex justify-start">
            <img
              src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png"
              alt="Flowva logo"
              className="h-[60px]"
            />
          </div>

          <nav className="flex-grow px-4">
            <ul>
              <li
                className="flex items-center gap-3 px-4 p-[0.75rem] mb-[0.5rem] rounded-[8px] cursor-pointer  duration-200 transition-all
                bg-[rgba(144,_19,_254,_0.2)] text-[#9013FE]"
              >
                <RewardsIcon />
                Rewards Hub
              </li>
            </ul>
          </nav>

          <div className="mt-auto py-3 relative flex justify-center">
            <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]" />
            <div className="w-full flex items-center justify-between px-4">
              <button className="flex items-center border-none">
                <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full font-semibold mr-[0.75rem] flex items-center justify-center  text-[#9013FE] bg-[#E9D4FF]">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas"
                    alt="User avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="text-start">
                  <span className="text-[0.9rem] font-semibold">Lucas</span>
                  <p className="text-[0.8rem] text-[#718096] truncate overflow-x-hidden max-w-[153px]">
                    lucasmauricio27@gmail.com
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full bg-gray-50 px-[1rem] lg:px-[2rem] lg:pt-[2rem] min-h-screen flex-grow md:overflow-y-auto box-border lg:min-h-0">
        <div className="relative bg-gray-50 ">
          <div className="sticky top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0 lg:py-0">
            <div className="bg-gray-50 flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                {/* <button>abri aside</button> */}
                <h1 className="text-xl md:text-[1.5rem] font-normal ">
                  Rewards Hub
                </h1>
              </div>
              <div className="mt-2 w-[40px] h-[40px]">
                <div className="notification-container group">
                  <button className="notification-bell has-unread ">
                    a
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bell"
                      className="svg-inline--fa fa-bell text-[#2D3748] group-hover:text-[#9013fe]"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                      ></path>
                    </svg>
                    <span className="notification-badge ">3</span>
                  </button>
                </div>
              </div>
            </div>

            {/* <div>
              <h1 className="text-2xl  mb-1">Rewards Hub</h1>
              <p className="text-gray-500 text-sm">
                Earn points, unlock rewards, and celebrate your progress!
              </p>
            </div>
            <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <BellIcon />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button> */}
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("earn")}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "earn"
                  ? "border-[#9013fe] text-[#9013fe]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Earn Points
            </button>
            <button
              onClick={() => setActiveTab("redeem")}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "redeem"
                  ? "border-[#9013fe] text-[#9013fe]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Redeem Rewards
            </button>
          </div>

          <section className="mb-10">
            <SectionHeader title="Your Rewards Journey" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Points Balance Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className="flex items-center gap-2 text-[#9013fe] font-medium text-sm">
                    <TrophyIcon /> Points Balance
                  </span>
                </div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-5xl font-bold text-[#9013fe]">5</span>
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white shadow-lg">
                    <StarIcon size={24} />
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex justify-between text-xs font-medium text-gray-500">
                    <span>Progress to $5 Gift Card</span>
                    <span>5/5000</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-[#9013fe] w-[0.1%] h-full rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    🚀 Just getting started — keep earning points!
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#9013fe]/5 rounded-full blur-2xl group-hover:bg-[#9013fe]/10 transition-colors"></div>
              </div>

              {/* Daily Streak Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 bg-gradient-to-b from-[#F5F3FF] to-white">
                <div className="flex items-center gap-2 text-[#4299E1] font-medium text-sm mb-4">
                  <CalendarIcon /> Daily Streak
                </div>
                <h3 className="text-2xl font-bold text-[#9013fe] mb-6">
                  0 day
                </h3>

                <div className="flex justify-between mb-6 px-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        idx === 1
                          ? "border-2 border-[#9013fe] text-[#9013fe]"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-gray-500 mb-4">
                  Check in daily to to earn +5 points
                </p>
                <button className="w-full py-3 bg-[#9013fe] text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#7c3aed] transition-colors shadow-lg shadow-[#9013fe]/20">
                  <BoltIcon /> Claim Today's Points
                </button>
              </div>

              {/* Top Tool Spotlight */}
              <div className="bg-gradient-to-br from-[#9013fe] to-[#4299E1] p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
                  Featured
                </span>
                <h3 className="text-lg font-bold mb-1">Top Tool Spotlight</h3>
                <p className="text-white/80 text-sm mb-6">Reclaim</p>

                <div className="bg-white rounded-xl p-4 text-[#111827]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 mt-1">
                      <CalendarIconColor />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">
                        Automate and Optimize Your Schedule
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Reclaim.ai is an AI-powered calendar assistant that
                        automatically schedules your tasks, meetings, and breaks
                        to boost productivity. Free to try — earn Flowva Points
                        when you sign up!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button className="px-4 py-2 bg-[#9013fe] text-white rounded-full text-xs font-medium flex items-center gap-2 hover:bg-[#7c3aed] transition-colors">
                      + Sign up
                    </button>
                    <button className="px-3 py-2 bg-[#F472B6] text-white rounded-full text-xs font-medium flex items-center gap-1 hover:bg-[#ec4899] transition-colors">
                      <GiftIconBox /> Claim 50 pts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <SectionHeader title="Earn More Points" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ActionCard
                icon={<StarOutlineIcon />}
                title="Refer and win 10.000 points!"
                description={
                  <span>
                    Invite 3 friends by Nov 20 and earn a chance to be one of 5
                    winners of{" "}
                    <span className="text-[#9013fe] font-bold">
                      10,000 points
                    </span>
                    . Friends must complete onboarding to qualify.
                  </span>
                }
              />

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#9013fe]">
                    <ShareIcon />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Share Your Stack</h4>
                    <p className="text-xs text-gray-500">Earn +25 pts</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 bg-gray-50 p-2 rounded-lg">
                  <span className="text-xs text-gray-500 ml-2">
                    Share your tool stack
                  </span>
                  <button className="flex items-center gap-1 text-[#9013fe] bg-[#EDE9FE] px-3 py-1.5 rounded-md text-xs font-medium hover:bg-[#ddd6fe] transition-colors">
                    <ShareIcon size={14} /> Share
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader title="Refer & Earn" />
            <div className="bg-[#F3E8FF] p-4 rounded-xl flex items-center gap-2 text-[#9013fe] font-medium text-sm">
              <LinkIcon /> Share Your Link
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-1 h-5 bg-[#9013fe] rounded-full"></div>
    <h2 className="text-lg font-bold">{title}</h2>
  </div>
);

const ActionCard = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: any;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#9013fe]">
        {icon}
      </div>
      <h4 className="font-medium text-sm">{title}</h4>
    </div>
    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const RewardsIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="gem"
    className="svg-inline--fa fa-gem "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="16"
    height="16"
  >
    <path
      fill="currentColor"
      d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"
    ></path>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#6B7280">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
  </svg>
);
const TrophyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.2 6.51c-.6-1.07-1.5-1.92-2.6-2.51H22v-2h-4V4c-1.1 0-2 .9-2 2v2H8V6c0-1.1-.9-2-2-2V2H2v2h4.4c-1.1.59-2 1.44-2.6 2.51C2.53 8.28 2 10.08 2 12c0 3.32 2.69 6 6 6h8c3.31 0 6-2.68 6-6 0-1.92-.53-3.72-1.8-5.49zM16 16H8c-2.21 0-4-1.79-4-4 0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4z" />
  </svg>
);
const StarIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
  </svg>
);
const BoltIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
  </svg>
);
const CalendarIconColor = () => (
  <div className="w-8 h-8 rounded-lg bg-[#E0E7FF] flex items-center justify-center text-[#9013fe]">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
    </svg>
  </div>
);
const GiftIconBox = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
  </svg>
);
const StarOutlineIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
const ShareIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);
const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
  </svg>
);

export default RewardsTemplate;
