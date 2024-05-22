import AppBar from "../nestedComponents/AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default Layout;
