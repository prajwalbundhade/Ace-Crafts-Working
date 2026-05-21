import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://teamacecrafts.com/api/login", {
        email,
        password,
      }); 
      const authToken = response.data.token;

      sessionStorage.setItem("authToken", authToken);
      sessionStorage.setItem("AdminName", response.data.admin_name);

      navigate("/Admin/Posts");
      console.log("Login successful:", response.data.message);
      setError(null);

    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <span className="admin-eyebrow">Ace Crafts</span>
        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="admin-error">{error}</p>}

          <div>
            <button className="admin-btn admin-btn-primary w-full" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
