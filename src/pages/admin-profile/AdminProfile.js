import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import CustomInputField from "../../components/customInputField/CustomInputField";

import { Alert, Button, Form } from "react-bootstrap";
import {
  updateAdminUserAction,
  updateAdminUserPasswordAction,
} from "../login/userAction";

const AdminProfile = () => {
  const [form, setForm] = useState({});
  const [password, setPassword] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.admin);
  useEffect(() => {
    user?._id && setForm(user);
  }, [user]);
  console.log(user);

  console.log(user);
  const handleOnProfileUpdate = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnProfileSubmit = (e) => {
    e.preventDefault();
    const { address, dob, fName, lName, phone, _id } = form;
    dispatch(updateAdminUserAction({ address, dob, fName, lName, phone, _id }));
  };

  const handleOnPasswordUpdate = (e) => {
    const { newPassword } = password;
    const { name, value } = e.target;
    setError("");
    if (name === "confirmPassword") {
      newPassword !== value && setError("Password do not match");
      newPassword.length < 6 && setError("Password must be 6 character long");
      !/[a-z]/.test(newPassword) && setError("Password must have 1 lower case"); //rejex password check for character a-z
      !/[A-Z]/.test(newPassword) && setError("Password must have 1 upper case"); //rejex password check for character a-z
      !/[0-9]/.test(newPassword) && setError("New password must have 1 number"); //rejex password check for character a-z

      !newPassword && setError("Password field must be provided.");
    }
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleOnPasswordSubmit = (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = password;
    if (!password.password || newPassword !== confirmPassword) {
      return alert(
        "Either current password field is empty or new password and confirm password do not match"
      );
    }

    updateAdminUserPasswordAction({
      password: password.password,
      newPassword,
      _id: user._id,
    });
  };
  const inputFields = [
    {
      name: "fName",
      value: form.fName,
      label: " First Name",
      type: "text",
      required: true,
    },
    {
      name: "lName",
      value: form.lName,
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      value: form.email,
      label: "Email",
      type: "email",
      disabled: true,
      required: true,
    },
    {
      name: "phone",
      value: form.phone,
      label: "Phone",
      type: "text",
      required: true,
    },
    {
      name: "address",
      value: form.address,
      label: "Address",
      type: "text",
    },
    {
      name: "dob",
      value: form.dob ? form.dob.slice(0, 10) : null,
      label: "DOB",
      type: "date",
    },
  ];
  return (
    <AdminLayout>
      <div className="user-profile mt-3 ">
        <h2 className="text-center text-success">Update User Profile</h2>

        <Form onSubmit={handleOnProfileSubmit}>
          {inputFields.map((input, index) => (
            <CustomInputField
              {...input}
              key={index}
              onChange={handleOnProfileUpdate}
            />
          ))}
          <Button variant="warning" type="submit">
            Update Profile
          </Button>
        </Form>
      </div>
      <div className="update-password mt-3">
        <h2 className="text-center text-success">Update your password</h2>
        <Form onSubmit={handleOnPasswordSubmit}>
          <CustomInputField
            name="password"
            type="password"
            required={true}
            label="Current Password"
            onChange={handleOnPasswordUpdate}
          />
          <CustomInputField
            name="newPassword"
            type="password"
            required={true}
            label="New Password"
            onChange={handleOnPasswordUpdate}
          />
          <Form.Group className="mb-3">
            <Form.Text>
              Password must contain lowecase, upperCase, number and atleast 6
              character long
            </Form.Text>
          </Form.Group>

          <CustomInputField
            name="confirmPassword"
            type="password"
            required={true}
            label="Confirm Password"
            onChange={handleOnPasswordUpdate}
          />
          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="danger" type="submit" disabled={error}>
            Update password
          </Button>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
