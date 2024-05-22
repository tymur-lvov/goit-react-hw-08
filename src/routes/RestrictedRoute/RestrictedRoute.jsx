import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router";

const RestrictedRoute = ({ component: Component, redirect = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirect} /> : Component;
};

export default RestrictedRoute;
