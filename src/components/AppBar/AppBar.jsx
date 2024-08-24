import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import s from "../AppBar/AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};
export default AppBar;
