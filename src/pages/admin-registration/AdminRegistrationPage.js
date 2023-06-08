import React, { useState } from "react";
import CustomInputField from "../../components/customInputField/CustomInputField";
import { Alert, Button, Form } from "react-bootstrap";
import MainLayout from "../../components/layout/MainLayout";
import { insertUser } from "../../helpers/axiosHelper";
import { Link } from "react-router-dom";

const AdminRegistrationPage = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }
    const result = await insertUser(rest);
    setResponse(result);
  };
  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Messi",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Messi",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Messi@10",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "10000010",
      required: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "sydney",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*****",
      required: true,
    },
  ];
  return (
    <MainLayout>
      <div className="form">
        <Form onSubmit={handleOnSubmit}>
          <h1>New Admin Registration</h1>
          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
          <hr />
          {fields.map((item, i) => (
            <CustomInputField key={i} {...item} onChange={handleOnChange} />
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="text-end">
          Already have account? <Link to="/login">Login</Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminRegistrationPage;
