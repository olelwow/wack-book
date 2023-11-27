import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import { SignUpPage } from "./Components/Pages/SignUpPage";
import { MainPage } from "./Components/Pages/MainPage";
import AccountSettingsPage from "./Components/Pages/AccountSettingsPage";
import WackBookHome from "./Components/MainContent/WackBookHome";

export const Routes1 = ({ setLoggedInUser, loggedInUser, isAuthenticated, setIsAuthenticated }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          path="SignUpPage"
          element={
            <SignUpPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
            />
          }
        />
        <Route
          path="MainPage"
          element={ isAuthenticated? (
            <MainPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />) : (<LoginPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />)
          }
        />
        <Route
          path="AccountSettingsPage"
          element={ isAuthenticated? (
            <AccountSettingsPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            /> ) : (<LoginPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />)
          }
        />
        <Route
          path="/"
          element={
            <>
              <WackBookHome />
              <LoginPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
            </>
          }
        />
      </Routes>
    </Router>
  );
};
