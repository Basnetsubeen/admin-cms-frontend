import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Button, Form } from "react-bootstrap";
import CustomInputField from "../../components/customInputField/CustomInputField";
import { loginAdminUserAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.admin);
  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user, navigate]);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdminUserAction(form));
  };
  return (
    <div className=" page-main">
      <MainLayout>
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h2 className="text-center mt-3">Login Form</h2>
            <CustomInputField
              name="email"
              label="Email"
              type="email"
              required={true}
              placeholder="Your@email.com"
              onChange={handleOnchange}
            />
            <CustomInputField
              label="password"
              type="password"
              name="password"
              required={true}
              placeholder="*******"
              onChange={handleOnchange}
            />
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div className="text-end">
            Do not have account? <Link to="/register">Register</Link>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default LoginPage;
