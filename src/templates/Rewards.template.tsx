import React from "react";
import FlowvaTabs from "../components/FlowvaTabs";
import {
  IconHome,
  IconDiscover,
  IconLibrary,
  IconTechStack,
  IconSubscriptions,
  IconRewardsHub,
  IconSettings,
  IconBell,
  IconAward,
  IconCalendar,
  IconZap,
  IconCalendarLucide,
  IconUserPlus,
  IconGift,
  IconStar,
  IconShare,
  IconUsers,
  IconCopy,
  IconFacebook,
  IconTwitter,
  IconLinkedIn,
  IconWhatsApp,
  IconHamburger,
} from "../components/RewardsIcons";
import { RewardsLottie } from "../components/RewardsLottie";

const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <li
    className={`flex items-center gap-3 px-4 p-[0.75rem] mb-[0.5rem] rounded-[8px] cursor-pointer duration-200 transition-all ${
      active
        ? "bg-[rgba(144,_19,_254,_0.2)] text-[#9013FE]"
        : "text-black hover:bg-[rgba(144,_19,_254,_0.1)] hover:text-[#9013FE]"
    }`}
  >
    {icon}
    <span className="tracking-wide truncate font-normal">{label}</span>
  </li>
);

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-lg md:text-2xl my-3 text-black border border-l-[4px] border-t-0 border-b-0 border-r-0 border-[#9301fe] pl-[0.75rem] font-semibold font-display">
    {title}
  </h2>
);

const EarnPointsTabContent = () => (
  <div>
    <div>
      <SectionHeader title="Your Rewards Journey" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Points Balance Card */}
        <div className="shadow-[0_5px_15px_rgba(0,_0,_0,_0.05)] min-h-[337px] transition-all rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] border border-[#f3f4f6] overflow-hidden duration-200">
          <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
              <IconAward />
              Points Balance
            </h3>
          </div>
          <div className="p-[1rem]">
            <div className="flex justify-between items-center">
              <div className="font-extrabold text-[36px] text-[#9013fe] m-[10px_0]">
                5
              </div>
              <div className="lf-player-container">
                <RewardsLottie />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">
                  Progress to <span className="font-medium">$5 Gift Card</span>
                </span>
                <span className="font-medium">5/5000</span>
              </div>
              <div className="h-[8px] bg-[#e5e7eb] rounded-[9999px] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-br from-[#9013fe] to-[#FF9FF5] rounded-full transition-[width] duration-500 ease-in-out"
                  style={{ width: "0.1%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                🚀 Just getting started — keep earning points!
              </p>
            </div>
          </div>
        </div>

        {/* Daily Streak Card */}
        <div className="shadow-[0_5px_15px_rgba(0,_0,_0,_0.05)] rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
          <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
              <IconCalendar />
              Daily Streak
            </h3>
          </div>
          <div className="p-4 pt-[17px]">
            <div className="font-extrabold text-[36px] text-[#9013fe] mb-2">
              0 day
            </div>
            <div className="flex mt-[18px] space-x-2 justify-center">
              {["M", "T", "W"].map((day, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500"
                >
                  {day}
                </div>
              ))}
              <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500 ring-2 ring-[#9013fe] ring-offset-2">
                T
              </div>
              {["F", "S", "S"].map((day, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 bg-gray-200 text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>
            <p className="text-[0.875rem] text-gray-600 text-center mt-3">
              Check in daily to to earn +5 points
            </p>
            <button className="mt-3 w-full py-3 px-6 rounded-full text-[14px] font-medium font-[Segoe UI] flex items-center justify-center gap-2 transition-all duration-200 bg-[#9013fe] text-white hover:shadow-[0_4px_12px_rgba(144,_19,_254,_0.2)] hover:translate-y-[-2px] border-none cursor-pointer">
              <IconZap />
              Claim Today's Points
            </button>
          </div>
        </div>

        {/* Top Tool Spotlight Card */}
        <div className="hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(0,_0,_0,_0.1)] bg-white rounded-[16px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden border border-[#f3f4f6] transition-all duration-300 ease-in-out">
          <div className="p-4 bg-[linear-gradient(135deg,_#9013FE_0%,_#70D6FF_100%)] text-white relative overflow-hidden">
            <span className="absolute top-[15px] left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
            <div className="flex items-center justify-between mt-[20px]">
              <h3 className="text-[1.25rem] font-bold relative z-[2]">
                Top Tool Spotlight
              </h3>
              <div className="overflow-hidden relative rounded-full size-10 md:size-16">
                <img
                  src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png"
                  alt="Reclaim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg">
              <strong> Reclaim</strong>
            </p>
          </div>
          <div className="p-[1rem]">
            <div className="flex justify-start mb-[1rem]">
              <div className="w-[24px] h-[24px] animate-pulse bg-[#eef2ff] rounded-[6px] flex items-center justify-center mr-[1rem] flex-shrink-0 text-[#9013fe]">
                <IconCalendarLucide />
              </div>
              <div className="flex-1">
                <h4 className="mb-[0.25rem] font-semibold">
                  Automate and Optimize Your Schedule
                </h4>
                <p className="text-[0.875rem] text-gray-600">
                  Reclaim.ai is an AI-powered calendar assistant that
                  automatically schedules your tasks, meetings, and breaks to
                  boost productivity. Free to try — earn Flowva Points when you
                  sign up!
                </p>
              </div>
            </div>
          </div>
          <div className="px-[1rem] py-[5px] flex justify-between items-center border border-t-[#f3f4f6] border-b-0 border-r-0 border-l-0">
            <button className="bg-[#9013fe] hover:bg-[#8628da] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0 cursor-pointer">
              <IconUserPlus /> Sign up
            </button>
            <button className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-white py-2 px-4 rounded-full font-semibold text-sm border-none cursor-pointer flex items-center gap-2">
              <IconGift /> Claim 50 pts
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <SectionHeader title="Earn More Points" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Refer and win */}
        <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
          <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
            <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
              <IconStar />
            </div>
            <div>
              <h3 className="font-semibold">Refer and win 10,000 points!</h3>
            </div>
          </div>
          <div className="p-[1rem]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">
                  Invite 3 friends by Nov 20 and earn a chance to be one of 5
                  winners of{" "}
                  <span className="text-[#9013fe]">10,000 points</span>. Friends
                  must complete onboarding to qualify.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Share Your Stack */}
        <div className="transition-all hover:border-[#9013fe] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
          <div className="p-[1rem] border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-[0.75rem]">
            <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-[rgba(144,_19,_254,_0.1)] text-[#9013fe]">
              <IconShare />
            </div>
            <div>
              <h3 className="font-semibold">Share Your Stack</h3>
              <p className="text-xs text-gray-500">Earn +25 pts</p>
            </div>
          </div>
          <div className="p-[1rem]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">Share your tool stack</p>
              </div>
              <button className="bg-[#eef2ff] hover:text-white hover:bg-[#9013fe] text-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0 cursor-pointer">
                <IconShare /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <SectionHeader title="Refer & Earn" />
      <div className="shadow-[0_5px_15px_rgba(0,_0,_0,_0.05)] rounded-[16px] hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] border border-[#f3f4f6] overflow-hidden transition-shadow duration-200">
        <div className="p-[1rem] relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
          <div className="flex items-center gap-3">
            <IconUsers />
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Share Your Link
              </h3>
              <p className="text-gray-500 text-sm">
                Invite friends and earn 25 points when they join!
              </p>
            </div>
          </div>
        </div>
        <div className="p-[1rem]">
          <div className="space-y-6">
            <div className="flex justify-between mb-[1rem]">
              <div className="text-center p-[0.5rem] flex-1">
                <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                  0
                </div>
                <div className="text-gray-600">Referrals</div>
              </div>
              <div className="text-center p-[0.5rem] flex-1">
                <div className="text-[1.5rem] font-semibold text-[#9013fe]">
                  0
                </div>
                <div className="text-gray-600">Points Earned</div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm mb-2 text-gray-700">
                Your personal referral link:
              </p>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full pr-10"
                  defaultValue="https://app.flowvahub.com/signup/?ref=lucas1246"
                />
                <button className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer z-10 bg-transparent border-none">
                  <IconCopy />
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-[1rem] mt-[1rem]">
              <button
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px] border-none cursor-pointer"
                style={{ background: "rgb(24, 119, 242)" }}
              >
                <IconFacebook />
              </button>
              <button
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px] border-none cursor-pointer"
                style={{ background: "black" }}
              >
                <IconTwitter />
              </button>
              <button
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px] border-none cursor-pointer"
                style={{ background: "rgb(0, 119, 181)" }}
              >
                <IconLinkedIn />
              </button>
              <button
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[18px] transition-transform duration-200 hover:translate-y-[-3px] border-none cursor-pointer"
                style={{ background: "rgb(37, 211, 102)" }}
              >
                <IconWhatsApp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RewardCard = ({
  emoji,
  title,
  description,
  cost,
  locked,
  comingSoon,
}: {
  emoji: string;
  title: string;
  description: string;
  cost: number;
  locked?: boolean;
  comingSoon?: boolean;
}) => (
  <div
    className={`border ${
      locked || comingSoon ? "opacity-[0.7] cursor-not-allowed" : ""
    } border-[#E9D4FF] bg-white rounded-[12px] p-[1.5rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] relative overflow-hidden transition-all duration-200 ease-linear hover:translate-y-[-5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)]`}
  >
    <div className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center m-[0_auto_1rem] text-[1.5rem] text-[#9013fe] bg-[#E9D4FF]">
      {emoji}
    </div>
    <h4 className="text-center text-[1.1rem] font-semibold mb-2">{title}</h4>
    <p className="text-center text-[0.9rem] text-[#2D3748] mb-4">
      {description}
    </p>
    <div className="flex items-center justify-center text-[#9013fe] font-semibold mb-4">
      ⭐ {cost} pts
    </div>
    <button
      disabled={locked || comingSoon}
      className={`w-full font-semibold p-[0.75rem] rounded-[8px] transition-all duration-300 ease-in-out ${
        locked || comingSoon
          ? "bg-[#d7e0ed] text-white"
          : "bg-[#9013fe] text-white cursor-pointer border-none"
      }`}
    >
      {comingSoon ? "Coming Soon" : locked ? "Locked" : "Redeem"}
    </button>
  </div>
);

const RedeemRewardsTabContent = () => (
  <div>
    <SectionHeader title="Redeem Your Points" />
    <FlowvaTabs
      defaultActiveKey="1"
      items={[
        {
          key: "1",
          label: (
            <div className="flex items-center gap-1">
              All Rewards
              <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#9031fe]/10 text-[#9031fe] font-semibold">
                7
              </span>
            </div>
          ),
          children: (
            <div className="grid gap-[1.5rem] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] mt-6">
              <RewardCard
                emoji="💸"
                title="$5 PayPal International"
                description="Receive a $5 PayPal balance transfer directly to your PayPal account email."
                cost={5000}
                locked={true}
              />
              <RewardCard
                emoji="🎁"
                title="$5 Virtual Visa Card"
                description="Use your $5 prepaid card to shop anywhere Visa is accepted online."
                cost={5000}
                locked={true}
              />
              <RewardCard
                emoji="🎁"
                title="$5 Apple Gift Card"
                description="Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes."
                cost={5000}
                locked={true}
              />
              <RewardCard
                emoji="🎁"
                title="$5 Google Play Card"
                description="Use this $5 Google Play Gift Card to purchase apps, games, movies, books, and more on the Google Play Store."
                cost={5000}
                locked={true}
              />
              <RewardCard
                emoji="🎁"
                title="$5 Amazon Gift Card"
                description="Get a $5 digital gift card to spend on your favorite tools or platforms."
                cost={5000}
                locked={true}
              />
              <RewardCard
                emoji="🎁"
                title="$10 Amazon Gift Card"
                description="Get a $10 digital gift card to spend on your favorite tools or platforms."
                cost={10000}
                locked={true}
              />
              <RewardCard
                emoji="📚"
                title="Free Udemy Course"
                description="Coming Soon!"
                cost={0}
                comingSoon={true}
              />
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="flex items-center gap-1">
              Unlocked
              <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#E2E8F0] text-[#CBD5E0]">
                0
              </span>
            </div>
          ),
          children: <div />, // Empty based on screenshot logic
        },
        {
          key: "3",
          label: (
            <div className="flex items-center gap-1">
              Locked
              <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#E2E8F0] text-[#CBD5E0]">
                6
              </span>
            </div>
          ),
          children: <div />,
        },
        {
          key: "4",
          label: (
            <div className="flex items-center gap-1">
              Coming Soon
              <span className="ml-2 text-xs rounded-full h-5 px-2 inline-flex justify-center items-center bg-[#E2E8F0] text-[#CBD5E0]">
                1
              </span>
            </div>
          ),
          children: <div />,
        },
      ]}
    />
  </div>
);

const RewardsTemplate = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-[100dvh] lg:h-screen lg:md:overflow-hidden w-full">
      {/* Sidebar */}
      <aside className="w-72 overflow-x-hidden flex flex-col h-screen shadow-md border-r border-black/10 text-black font-sans">
        <div className="flex flex-col h-full">
          <div className="p-2 px-7 my-2 flex justify-start">
            <img
              src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png"
              loading="eager"
              alt="Flowva Logo"
              className="h-[60px]"
            />
          </div>
          <nav className="flex-grow px-4">
            <ul>
              <SidebarItem icon={<IconHome />} label="Home" />
              <SidebarItem icon={<IconDiscover />} label="Discover" />
              <SidebarItem icon={<IconLibrary />} label="Library" />
              <SidebarItem icon={<IconTechStack />} label="Tech Stack" />
              <SidebarItem icon={<IconSubscriptions />} label="Subscriptions" />
              <SidebarItem
                icon={<IconRewardsHub />}
                label="Rewards Hub"
                active
              />
              <SidebarItem icon={<IconSettings />} label="Settings" />
            </ul>
          </nav>
          <div className="mt-auto py-3 relative flex justify-center">
            <div className="absolute top-0 left-4 right-4 border-t border-[#64748B]"></div>
            <div className="w-full flex items-center justify-between px-4">
              <button className="flex items-center border-none bg-transparent p-0 cursor-pointer">
                <div className="w-[40px] h-[40px] relative overflow-hidden rounded-full font-semibold mr-[0.75rem] flex items-center justify-center text-[#9013FE] bg-[#E9D4FF]">
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocJ1vHCMRFETk6NzPbFvJRHy-fjhR3qh33KdwEWZTCwWYDvuMhlgBQ=s96-c"
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
        <div className="relative bg-gray-50">
          <div className="sticky top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0 lg:py-0">
            <div className="bg-gray-50 flex justify-between items-center w-full pt-[7px] pb-[7px]">
              <div className="flex items-center gap-3">
                <button className="lg:hidden bg-transparent border-none p-0 cursor-pointer">
                  <IconHamburger />
                </button>
                <h1 className="text-xl md:text-[1.5rem] font-normal m-0 font-[Roboto]">
                  Rewards Hub
                </h1>
              </div>
              <div className="mt-2">
                <div className="notification-container group relative">
                  <button
                    className="notification-bell has-unread bg-transparent border-none cursor-pointer"
                    aria-label="Notifications (3 unread)"
                  >
                    <IconBell />
                    <span className="notification-badge absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] px-1 rounded-full">
                      3
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-600 mb-0 font-[Roboto]">
              Earn points, unlock rewards, and celebrate your progress!
            </p>
            <div className="lg:h-[calc(100vh-110px)] [scrollbar-width:none] [-ms-overflow-style:none] overflow-x-hidden">
              <FlowvaTabs
                className="mt-5"
                defaultActiveKey="1"
                items={[
                  {
                    key: "1",
                    label: "Earn Points",
                    children: <EarnPointsTabContent />,
                  },
                  {
                    key: "2",
                    label: "Redeem Rewards",
                    children: <RedeemRewardsTabContent />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RewardsTemplate;
