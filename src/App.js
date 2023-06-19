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
import PaymentMethod from "./pages/paymentMethod/PaymentMethod";
import NewProduct from "./pages/products/NewProduct";
import EditProduct from "./pages/products/EditProduct";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import ResetPassword from "./pages/login/ResetPassword";
import Order from "./pages/orders/Order";
import OrderDetails from "./pages/orders/OrderDetails";

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
          <Route
            path="/product/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/product/edit/:_id"
            element={
              <PrivateRouter>
                <EditProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/payment-method"
            element={
              <PrivateRouter>
                <PaymentMethod />
              </PrivateRouter>
            }
          />
          <Route
            path="/admin-profile"
            element={
              <PrivateRouter>
                <AdminProfile />
              </PrivateRouter>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRouter>
                <Order />
              </PrivateRouter>
            }
          />
          <Route
            path="/order/:_id"
            element={
              <PrivateRouter>
                <OrderDetails />
              </PrivateRouter>
            }
          />
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistrationPage />} />
          <Route path="/admin/verify-email" element={<EmailVerification />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
