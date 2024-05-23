import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRefreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/slice";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RestrictedRoute from "./routes/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout";

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefreshThunk());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {isRefreshing ? null : (
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirect="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirect="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirect="/login" component={<ContactsPage />} />
              }
            />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
