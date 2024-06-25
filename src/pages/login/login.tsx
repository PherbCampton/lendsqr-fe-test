import "./login.scss";
import { ILLUSTRATION, LOGO } from "../../constants/assets";
import { useState } from "react";
import { Input } from "../../components/Input/Input";

export const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div>
      <div className="background-container">
        <div className="background-left"></div>
        <div className="background-right"></div>
      </div>
      <div className="fullscreen">
        <div className="logo">
          <img src={LOGO} alt="Company Logo" />
        </div>
        <div className="flex content-wrapper">
          <div className="ill-container">
            <img src={ILLUSTRATION} alt="Login Illustration" />
          </div>
          <form className="form-container">
            <h1 className="login-heading">Welcome!</h1>
            <p className="login-description">Enter details to login.</p>

            <Input
              type="email"
              value={emailValue}
              placeholder="Email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Input
              type="password"
              value={passwordValue}
              placeholder="Password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />

            <p className="forgot-password">FORGOT PASSWORD?</p>
            <button type="submit" className="login-button">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
