import { Outlet } from "react-router-dom";
import { NavBar, NavMenu } from "../../components";

export const Dashboard = () => {
  return (
    <div className="flex flex-column work-sans">
      <NavBar />
      <div className="flex">
        <NavMenu />
        <Outlet />
      </div>
    </div>
  );
};
