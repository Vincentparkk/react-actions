import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Deduction_home from "./Deduction_home";
import Deduction_apply1 from "./Deduction_apply1";
import Deduction_apply2 from "./Deduction_apply2";
import Deduction_apply3 from "./Deduction_apply3";
import Deduction_history from "./Deduction_history";
import Deduction_mypage from "./Deduction_mypage";
import Deduction_mypage_modify from "./Deduction_mypage_modify";
import Deduction_mypage_modify_success from "./Deduction_mypage_modify_success";
import Health_home from "./Health_home";
import Health_1 from "./Health_1";
import Health_2 from "./Health_2";
import Health_3 from "./Health_3";
import Card from "./Card";
import Login from "./Loginpage";

function Homepage() {
  return (
    <>
      <BrowserRouter basename="react-actions">
        {/* <Link to="/">to login</Link> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="card" element={<Card />} />
          <Route path="/deduction_home" element={<Deduction_home />} />
          <Route
            path="deduction_home/deduction_apply1"
            element={<Deduction_apply1 />}
          />
          <Route
            path="deduction_home/deduction_apply2"
            element={<Deduction_apply2 />}
          />
          <Route
            path="deduction_home/deduction_apply3"
            element={<Deduction_apply3 />}
          />
          <Route
            path="deduction_home/deduction_history"
            element={<Deduction_history />}
          />
          <Route
            path="deduction_home/deduction_mypage"
            element={<Deduction_mypage />}
          />
          <Route
            path="deduction_home/deduction_mypage_modify"
            element={<Deduction_mypage_modify />}
          />
          <Route
            path="deduction_home/deduction_mypage_modify_success"
            element={<Deduction_mypage_modify_success />}
          />
          <Route path="health" element={<Health_home />} />
          <Route path="health/health_1" element={<Health_1 />} />
          <Route path="health/health_2" element={<Health_2 />} />
          <Route path="health/health_3" element={<Health_3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Homepage;
