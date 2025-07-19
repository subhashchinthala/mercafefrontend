import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";
import "./Login.css"; // Ensure this file exists in same folder

export default function Login() {
  const { user, setUser } = useContext(AppContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/login`;
      const result = await axios.post(url, user);
      setUser(result.data);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-glass">
        <h2>Welcome Back 👋</h2>
        <p className="login-sub">Login to your account</p>

        {error && <p className="error-msg">{error}</p>}

        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleSubmit}>Sign In</button>
        <p className="link-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
