import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import CustomInputField from "../customInputField/CustomInputField";

const RequestPasswordForm = ({ handleOnRequestForm }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const { password } = form;
    setError("");
    if (name === "confirmPassword") {
      password !== value && setError("Password do not match.");
      !/[a-z]/.test(password) &&
        setError("Password should contain at least one lowercase.");
      !/[A-Z]/.test(password) &&
        setError("Password should contain at least one uppercase.");
      !/[0-9]/.test(password) &&
        setError("Password should contain at least one number.");

      password.length < 6 &&
        setError("Password should contain atleat six characters.");
      !password && setError("Password field cannot be left empty.");
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    handleOnRequestForm(rest);
  };

  return (
    <div className="form">
      <h2>Update New Password</h2>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        <CustomInputField
          onChange={handleOnChange}
          label="OTP"
          name="otp"
          type="number"
          required={true}
          placeholder="check your email for otp"
        />
        <CustomInputField
          onChange={handleOnChange}
          label="Password"
          name="password"
          type="password"
          required={true}
          placeholder="********"
        />
        <Form.Group>
          <Form.Text className="py-3">
            Note: Password must contain atleast one number, lowercase, uppercase
            and must be longer than 6 character.
          </Form.Text>
        </Form.Group>
        <CustomInputField
          onChange={handleOnChange}
          label="ConfirmPassword"
          name="confirmPassword"
          type="password"
          required={true}
          placeholder="********"
        />
        <Form.Group className="mb-3">
          {error && <Alert variant="danger">{error}</Alert>}
        </Form.Group>
        <Form.Group className="d-grid">
          <Button variant="warning" type="submit" disabled={error}>
            Update Password
          </Button>
          <div className="text-end">
            <a href="/reset-password">Request OTP</a>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default RequestPasswordForm;
