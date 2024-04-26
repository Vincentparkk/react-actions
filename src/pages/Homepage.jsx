import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Deduction_home from "./Deduction_home";
import Deduction_apply1 from "./Deduction_apply1";
import Deduction_apply2 from "./Deduction_apply2";
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
          <Route path="health" element={<Health_home />} />
        </Routes>

        <Link to="/">Card</Link>
        <Link to="deduction_home">Deduction_home</Link>
        <Link to="deduction_home/deduction_apply1">Deduction_apply1</Link>
        <Link to="deduction_home/deduction_apply2">Deduction_apply2</Link>
        <Link to="health">Health</Link>
      </BrowserRouter>
    </>
  );
}

export default Homepage;
