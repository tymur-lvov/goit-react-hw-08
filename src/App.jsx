import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import Layout from "./components/nestedComponents/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
