import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("user");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement login functionality
    console.log("Logging in with email:", email);
    console.log("User type:", userType);
  };

  return (
    <div className="login-page">
      <form className="login-form">
        <div className="user-type">
          <label htmlFor="user-type">User Type:</label>
          <select
            id="user-type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
        </div>

        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={`password-toggle ${showPassword ? "show" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>
        </div>

        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        <div className="signup-link">
          New user? <a href="/signup">Signup here</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
