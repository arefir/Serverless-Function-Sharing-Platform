import React from "react";
import "./LoginPage.css";
import Introduction from "./Introduction";
import Login from "./Login";
import Register from "./Register";

function LoginPage() {
  return (
    <div className="login-page">
      <Introduction />
      <Login />
      <Register />
    </div>
  );
}

export default LoginPage;
