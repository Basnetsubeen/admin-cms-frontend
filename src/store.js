import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/SystemSlice";
import categoryReducer from "./pages/categories/CategorySlice";
import paymentMethodReducer from "./pages/paymentMethod/PaymentSlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    category: categoryReducer,
    paymentMethod: paymentMethodReducer,
  },
});

export default store;
