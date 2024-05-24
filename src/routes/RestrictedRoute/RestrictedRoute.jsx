import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ path, element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={path} /> : element;
};

export default RestrictedRoute;
