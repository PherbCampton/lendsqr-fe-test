import "./login.scss";
import { ILLUSTRATION, LOGO } from "../../constants/assets";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { createLogin } from "../../services/auth/authslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (emailValue.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }

    if (passwordValue.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (isValid) {
      const result = dispatch(createLogin({ email, password }));
    } else {
      setSnackbarMessage("Please fill in all required fields.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
          <form className="form-container" onSubmit={handleLogin}>
            <h1 className="login-heading">Welcome!</h1>
            <p className="login-description">Enter details to login.</p>

            <Input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              value={password}
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="error"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};
