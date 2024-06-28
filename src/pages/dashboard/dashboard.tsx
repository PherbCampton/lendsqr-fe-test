import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, NavMenu } from "../../components";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { getAllLoanUsers } from "../../services/user/userSlice";

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllLoanUsers());
  }, []);
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
