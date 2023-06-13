import React, { useState } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import PaymentTable from "../../components/payment-table/PaymentTable";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setModalShow } from "../system-state/SystemSlice";

const PaymentMethod = () => {
  const [showForm, setShowForm] = useState("");
  const dispatch = useDispatch();

  const handleOnEditOrAddModal = (str) => {
    setShowForm(str);
    dispatch(setModalShow());
  };
  return (
    <AdminLayout>
      {/* Add payment form */}
      <h4 className="py-4">Payment Method Management</h4>
      <hr />
      <div className="text-end py-3">
        <Button variant="primary" onClick={() => handleOnEditOrAddModal("add")}>
          <i className="fa-solid fa-plus"></i> Add New Payment Method
        </Button>
      </div>
      {/* Payment Table */}
      <PaymentTable
        handleOnEditOrAddModal={handleOnEditOrAddModal}
        showForm={showForm}
      />
    </AdminLayout>
  );
};

export default PaymentMethod;
