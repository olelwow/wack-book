import { Outlet, Link } from "react-router-dom";
import Header from "./Components/Header";
import  Login  from "./Component/Login";

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
