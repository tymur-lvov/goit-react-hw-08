import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../../redux/auth/slice";
import { userLogoutThunk } from "../../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const username = useSelector(selectUserName);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogoutThunk());
  };

  return (
    <div className={s.wrapper}>
      <p>Welcome, {username}!</p>
      <button className={s.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
