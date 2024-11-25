import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { login, getUser } from "../actions/userActions.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user._id) navigate("/main");
    else console.log(user);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const user = await getUser();
      if (user._id) navigate("/main");
      else console.log(user);
    };

    checkLogin();
  }, [navigate]);

  return (
    <header className="page-login">
      <div className="right-side">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login to your Account</h2>

          <button className="google-login">
            <img
              src="/googlelogo.png"
              alt="Google logo"
              className="google-icon"
            />
            Continue with Google
          </button>

          <div className="separator">
            -------- or Sign in with Email --------
          </div>

          <p>Email</p>
          <input
            type="email"
            placeholder="mail@abc.com"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <div className="remember-me">
            <label>
              <input type="checkbox" id="rememberMe" />
              Remember Me
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </header>
  );
}

export default Login;
