import "./login.scss";
import { ILLUSTRATION, LOGO } from "../../constants/assets";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { createLogin, reset } from "../../services/auth/authslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { CircularProgress, SnackbarCloseReason } from "@mui/material";
import { AppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (isValid) {
      const data = {
        email,
        password,
      };
      const result = await dispatch(createLogin(data));
      if (createLogin.fulfilled.match(result)) {
        setSnackbarMessage(message || "Login Successful!!!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setTimeout(() => {
          isSuccess && navigate("/dashboard");
        }, 3000);
        dispatch(reset());
        setEmail("");
        setPassword("");
      } else if (createLogin.rejected.match(result)) {
        setSnackbarMessage(message || "Login failed");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    } else {
      setSnackbarMessage("Please fill in all required fields.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
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
            {emailError && <p className="error-text">{emailError}</p>}

            <Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-text">{passwordError}</p>}

            <p className="forgot-password">FORGOT PASSWORD?</p>
            <button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              {isLoading ? <CircularProgress size={19} /> : "LOG IN"}
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
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};
