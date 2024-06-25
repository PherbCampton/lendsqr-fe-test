import { Dashboard } from "./pages";
import { Login } from "./pages/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users } from "./pages/users/users";
import UserDetails from "./pages/userDetails/UserDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Users />}></Route>
          <Route path="user-details" element={<UserDetails />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
