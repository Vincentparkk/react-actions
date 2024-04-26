import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Deduction_home from "./Deduction_home";
import About from "./About";
import Contact from "./Contact";

function Homepage() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Deduction_home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Deduction_home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Homepage;
