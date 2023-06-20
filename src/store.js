import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/SystemSlice";
import categoryReducer from "./pages/categories/CategorySlice";
import paymentMethodReducer from "./pages/paymentMethod/PaymentSlice";
import productReducer from "./pages/products/ProductSlice";
import orderReducer from "./pages/orders/OrderSlice";
import clientReducer from "./pages/users/UserSlice";
import reviewsReducer from "./pages/reviews/ReviewSlice";

const store = configureStore({
  reducer: {
    admin: userReducer,
    system: systemReducer,
    category: categoryReducer,
    paymentMethod: paymentMethodReducer,
    product: productReducer,
    order: orderReducer,
    users: clientReducer,
    reviews: reviewsReducer,
  },
});

export default store;
