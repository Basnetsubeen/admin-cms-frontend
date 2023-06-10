import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/login/LoginPage";
import AdminRegistrationPage from "./pages/admin-registration/AdminRegistrationPage";
import EmailVerification from "./pages/admin-registration/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRouter from "./components/private-router/PrivateRouter";
import Category from "./pages/categories/Category";
import Product from "./pages/products/Product";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Private routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />
          <Route
            path="/product"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
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
