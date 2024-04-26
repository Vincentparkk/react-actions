import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <p>Card</p>
      <Link to="deduction_home">Deduction_home</Link>
      <Link to="health">Health</Link>
    </>
  );
}

export default Card;
