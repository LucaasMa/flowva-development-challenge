import { createFileRoute } from "@tanstack/react-router";
import RewardsPage from "../pages/Rewards.Page";

export const Route = createFileRoute("/earn-rewards")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RewardsPage />;
}
