import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className={s.userContainer}>
        <span>Welcome, {user.name} !</span>
      </div>
      <button onClick={handleLogout} className={s.logoutBtn}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
