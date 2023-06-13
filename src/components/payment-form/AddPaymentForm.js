import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInputField from "../customInputField/CustomInputField";
import { useDispatch } from "react-redux";
import { postPaymentAction } from "../../pages/paymentMethod/PaymentMethodAction";
import { CustomModal } from "../modal/CustomModal";

const initialState = {
  status: "",
  name: "",
  description: "",
};
const AddPaymentForm = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postPaymentAction(form));
  };
  const inputFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter category name",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      required: true,
      placeholder: "Write information about the payment method",
    },
  ];
  return (
    <CustomModal title="Add new Payment Method">
      <Form onSubmit={handleOnSubmit} className="mt-3">
        <Form.Group>
          <Form.Check
            type="switch"
            name="status"
            label="status"
            onChange={handleOnChange}
          />
        </Form.Group>

        {inputFields.map((item, i) => (
          <CustomInputField {...item} key={i} onChange={handleOnChange} />
        ))}

        <Form.Group>
          <Button variant="success" type="submit">
            {" "}
            Add Payment Method
          </Button>
        </Form.Group>
      </Form>
    </CustomModal>
  );
};

export default AddPaymentForm;
