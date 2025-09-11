import React, { useState } from "react";
import "./login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Register

  // input states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful 🎉");

    // clear login fields
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration Successful 🎉");

    // clear register fields
    setRegName("");
    setRegEmail("");
    setRegPassword("");
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      {isLogin ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don’t have an account?{" "}
            <span className="link" onClick={() => setIsLogin(false)}>
              Register
            </span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={regName}
            onChange={(e) => setRegName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <span className="link" onClick={() => setIsLogin(true)}>
              Login
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;

