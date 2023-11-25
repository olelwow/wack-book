import { Outlet } from "react-router-dom";
import Header from "../LoginAndSignUp/Header";
import Login from "../LoginAndSignUp/Login";

const LoginPage = ({ setLoggedInUser, loggedInUser }) => {
  return (
    <>
      <Header />
      <Login setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
      <Outlet />
    </>
  );
};

export default LoginPage;
