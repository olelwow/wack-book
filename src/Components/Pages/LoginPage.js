import { Outlet, Link } from "react-router-dom";
import Header from "../Header";
import  Login  from "../Login";

const LoginPage = () => {
  return (
    <>
      <Header />
      <Login />
      <Outlet />
    </>
  )
};

export default LoginPage;
