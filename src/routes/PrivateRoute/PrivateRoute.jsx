import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router";

const PrivateRoute = ({ component: Component, redirect = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirect} />;
};

export default PrivateRoute;
