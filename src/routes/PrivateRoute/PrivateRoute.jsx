import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ path, element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? element : <Navigate to={path} />;
};

export default PrivateRoute;
