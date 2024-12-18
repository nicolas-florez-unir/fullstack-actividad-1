import { Outlet } from "react-router";

import { NavBar } from "@shared/components";

export default function HomeLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
