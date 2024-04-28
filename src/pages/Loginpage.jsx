import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const [test1, setTest1] = useState([]);

  useEffect(() => {
    fetch("https://juniper-colossal-mail.glitch.me/personalInfo?id=8d97")
      .then((res) => res.json())
      .then((data) => {
        setTest1(data); // 가정: 서버 응답의 첫 번째 항목이 필요한 데이터
      });
  }, []);

  console.log(test1);

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
