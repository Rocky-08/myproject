import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/NavBar";
import MainPage from "./MainPage";
import Contact from "./Contact Us/Contact";

import SignUp from "./SignUp/SignUp";
import LoginPage from "./Login/LoginPage";
import FilterFeature from "./Display cards/FilterFeature";
import Policy from "./Policy/Policy";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cards/:name" element={<FilterFeature />} />
          <Route path="policy" element={<Policy />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
