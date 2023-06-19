import React from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Link } from "react-router-dom";
import OrderEditForm from "../../components/order-edit/OrderEditForm";

const OrderDetails = () => {
  return (
    <AdminLayout>
      <div className="mt-3">
        <Link to="/orders" className="text-decoration-none text-secondary">
          &lt;Back
        </Link>
      </div>
      <h1 className="py-3">OrderDetails</h1>
      <OrderEditForm />
    </AdminLayout>
  );
};

export default OrderDetails;
