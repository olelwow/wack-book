import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import { SignUpPage } from "./Components/Pages/SignUpPage";
import { MainPage } from "./Components/Pages/MainPage";
import AccountSettingsPage from "./Components/Pages/AccountSettingsPage";

export const Routes1 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="SignUpPage" element={<SignUpPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="AccountSettingsPage" element={<AccountSettingsPage />} />
      </Routes>
    </Router>
  );
};
