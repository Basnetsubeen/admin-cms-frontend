import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-state/SystemSlice";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const dispatch = useDispatch();

  const { showSideMenu } = useSelector((state) => state.system);

  const handleClose = () => dispatch(setShowSideMenu(false));

  return (
    <div>
      <Offcanvas show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin CMS Pannel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link
                onClick={handleClose}
                to="/dashboard"
                className="nav-link text-danger"
              >
                <i className="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/category" className="nav-link">
                <i className="fa-solid fa-list"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/product" className="nav-link">
                <i className="fa-solid fa-box"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                onClick={handleClose}
                to="/payment-method"
                className="nav-link"
              >
                <i className="fa-solid fa-credit-card"></i> Payment Method
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/orders" className="nav-link">
                <i className="fa-solid fa-table"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-star"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-gear"></i> Setting
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideMenu;
