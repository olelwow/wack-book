import { Outlet } from "react-router-dom";
import Header from "../Header";
import Login from "../Login";

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
