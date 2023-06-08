import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/login/LoginPage";
import AdminRegistrationPage from "./pages/admin-registration/AdminRegistrationPage";
import EmailVerification from "./pages/admin-registration/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Private routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistrationPage />} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
