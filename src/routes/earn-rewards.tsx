import { createFileRoute, redirect } from "@tanstack/react-router";
import RewardsPage from "../pages/Rewards.Page";
import supabase from "../utils/supabase";

export const Route = createFileRoute("/earn-rewards")({
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      throw redirect({
        to: "/signin",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <RewardsPage />;
}
