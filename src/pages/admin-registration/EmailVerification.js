import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyAdminEmail } from "../../helpers/axiosHelper";

const EmailVerification = () => {
  const [isPending, setIsPending] = useState(true);
  const [response, setResponse] = useState({});

  const [queryParams] = useSearchParams();

  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    //IFFY function can be run in useEffect to control async and await
    (async () => {
      const result = await verifyAdminEmail(obj);
      setResponse(result);
      setIsPending(false);
    })();
  }, [queryParams]);
  return (
    <div>
      <MainLayout>
        <Container className="page-main">
          {isPending && (
            <Card className="mt-5 p-2 m-auto" style={{ width: "20rem" }}>
              <Spinner
                variant="primary"
                animation="border"
                className="m-auto mb-4"
              ></Spinner>
              <h2> Email Verification Process has began,Please wait .....</h2>
            </Card>
          )}
          {response.message && (
            <Alert
              className="mt-5 p-2 m-auto"
              style={{ width: "20rem" }}
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
        </Container>
      </MainLayout>
    </div>
  );
};

export default EmailVerification;
