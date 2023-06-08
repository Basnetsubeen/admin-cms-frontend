import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container className="page-main" style={{ minHeight: "75.5vh" }}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
