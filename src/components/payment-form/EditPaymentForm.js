import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInputField from "../customInputField/CustomInputField";
import { useDispatch, useSelector } from "react-redux";
import { updatePaymentAction } from "../../pages/paymentMethod/PaymentMethodAction";
import { CustomModal } from "../modal/CustomModal";

const initialState = {
  status: "",
  name: "",
  description: "",
};
const EditPaymentForm = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const { selectedPaymentMd } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    setForm(selectedPaymentMd);
  }, [selectedPaymentMd]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, ...rest } = form;
    dispatch(updatePaymentAction(rest));
  };
  const inputFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter category name",
      value: form.name,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      required: true,
      placeholder: "Write information about the payment method",
      value: form.description,
    },
  ];
  return (
    <CustomModal title="Edit Payment Method">
      <Form onSubmit={handleOnSubmit} className="mt-3">
        <Form.Group>
          <Form.Check
            type="switch"
            name="status"
            label="status"
            onChange={handleOnChange}
            checked={form.status === "active"}
          />
        </Form.Group>

        {inputFields.map((item, i) => (
          <CustomInputField {...item} key={i} onChange={handleOnChange} />
        ))}

        <Form.Group>
          <Button variant="success" type="submit">
            {" "}
            Edit Payment Method
          </Button>
        </Form.Group>
      </Form>
    </CustomModal>
  );
};

export default EditPaymentForm;
