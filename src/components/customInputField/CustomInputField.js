import React from "react";
import Form from "react-bootstrap/Form";

const CustomInputField = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};

export default CustomInputField;
