import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentAction,
  getPaymentAction,
} from "../../pages/paymentMethod/PaymentMethodAction";

import EditPaymentForm from "../payment-form/EditPaymentForm";
import { setSelectedPaymentMd } from "../../pages/paymentMethod/PaymentSlice";
import AddPaymentForm from "../payment-form/AddPaymentForm";

const PaymentTable = ({ handleOnEditOrAddModal, showForm }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPaymentAction());
  }, [dispatch]);

  const { paymentMethods } = useSelector((state) => state.paymentMethod);

  const handleOnEdit = (item) => {
    dispatch(setSelectedPaymentMd(item)); //For preselectind data at edit payment
    handleOnEditOrAddModal("edit");
  };

  const handleOnDelete = (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    dispatch(deletePaymentAction(_id));
  };
  const handleEditOrAddForm = {
    add: <AddPaymentForm />,
    edit: <EditPaymentForm />,
  };

  return (
    <div>
      {handleEditOrAddForm[showForm]}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Status</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentTable;
