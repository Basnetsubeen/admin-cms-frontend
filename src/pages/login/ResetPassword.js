import React, { useState } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import RequestOTPform from "../../components/reset-password/RequestOTPform";
import RequestPasswordForm from "../../components/reset-password/RequestPasswordForm";
import {
  requestOTPforAdminUserPassword,
  resetAdminUserPassword,
} from "../../helpers/axiosHelper";
import { Alert } from "react-bootstrap";

const ResetPassword = () => {
  const [passwordForm, setPasswordForm] = useState("otp");
  const [resp, setResp] = useState({});
  const [userEmail, setUserEmail] = useState("");

  const handleOnOTPrequest = async (email) => {
    if (!email) {
      return alert("Email should be provided.");
    }
    setUserEmail(email);
    const response = await requestOTPforAdminUserPassword({ email });
    setResp(response);
    response.status === "success" && setPasswordForm("password");
  };

  const handleOnRequestForm = async (data) => {
    data.email = userEmail;
    const response = await resetAdminUserPassword(data);
    setResp(response);
  };
  const form = {
    otp: <RequestOTPform handleOnOTPrequest={handleOnOTPrequest} />,
    password: <RequestPasswordForm handleOnRequestForm={handleOnRequestForm} />,
  };
  return (
    <AdminLayout>
      <div className="mt-3">
        {resp.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
          </Alert>
        )}
      </div>

      <div className="div">{form[passwordForm]}</div>
    </AdminLayout>
  );
};

export default ResetPassword;
