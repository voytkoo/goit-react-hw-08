import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const linkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={linkClass}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
