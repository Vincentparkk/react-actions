import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  // useEffect(() => {
  //   fetch("https://testdata1.vercel.app/applyItem")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <>
      <h1>Login</h1>

      <Link to="/card">
        <button>로그인!</button>
      </Link>
    </>
  );
}

export default Login;
