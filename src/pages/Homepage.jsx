import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Deduction_home from "./Deduction_home";
import Deduction_apply1 from "./Deduction_apply1";
import Deduction_apply2 from "./Deduction_apply2";
import Deduction_apply3 from "./Deduction_apply3";
import Deduction_history from "./Deduction_history";
import Deduction_mypage from "./Deduction_mypage";
import Health_home from "./Health_home";
import Card from "./Card";

function Homepage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="deduction_home" element={<Deduction_home />} />
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
          <Route path="health" element={<Health_home />} />
        </Routes>

        <Link to="/">Card</Link>
        <Link to="deduction_home">Deduction_home</Link>
        <Link to="health">Health</Link>
      </BrowserRouter>
    </>
  );
}

export default Homepage;
