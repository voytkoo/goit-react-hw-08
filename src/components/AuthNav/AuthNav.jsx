import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";
const AuthNav = () => {
  const linkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.links}>
      <NavLink to="/register" className={linkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={linkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
