import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import { SignUpPage } from "./Components/Pages/SignUpPage";
import { MainPage } from "./Components/Pages/MainPage";
import AccountSettingsPage from "./Components/Pages/AccountSettingsPage";

export const Routes1 = ({ setLoggedInUser, loggedInUser }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
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
          element={
            <MainPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
            />
          }
        />
        <Route
          path="AccountSettingsPage"
          element={
            <AccountSettingsPage
              setLoggedInUser={setLoggedInUser}
              loggedInUser={loggedInUser}
            />
          }
        />
      </Routes>
    </Router>
  );
};
