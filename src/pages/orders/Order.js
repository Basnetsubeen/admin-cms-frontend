import React from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import OrderTable from "../../components/order-table/OrderTable";

const Order = () => {
  return (
    <AdminLayout>
      <h1>Order Management</h1>
      <OrderTable />
    </AdminLayout>
  );
};

export default Order;
