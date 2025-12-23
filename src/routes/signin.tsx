import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "../pages/Login.Page";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}
