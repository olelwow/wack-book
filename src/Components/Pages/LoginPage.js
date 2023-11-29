import { Outlet } from "react-router-dom";
import Header from "../LoginAndSignUp/Header";
import Login from "../LoginAndSignUp/Login";

const LoginPage = ({
  setLoggedInUser,
  loggedInUser,
  isAuthenticated,
  setIsAuthenticated,
}) => {
  return (
    <>
      <Header />
      <Login
        setLoggedInUser={setLoggedInUser}
        loggedInUser={loggedInUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Outlet />
      <p className="version">Senast uppdaterad: 29/11/2023</p>
    </>
  );
};

export default LoginPage;
