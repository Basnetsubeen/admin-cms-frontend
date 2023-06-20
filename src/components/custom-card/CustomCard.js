import React from "react";
import { Card } from "react-bootstrap";
import "./CustomCard.style.css";

const CustomCard = ({ count, title }) => {
  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Body className="py-3 text-light">
        <Card.Title className="fw-bolder fs-1">{count}</Card.Title>
        <Card.Text className="fw-bolder fs-1">{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
