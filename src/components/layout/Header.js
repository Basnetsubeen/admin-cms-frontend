import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setShowSideMenu } from "../../pages/system-state/SystemSlice";
import { logoutUserAction } from "../../pages/login/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShow = () => dispatch(setShowSideMenu(true));
  const { user } = useSelector((state) => state.admin);

  const handleOnLogout = () => {
    dispatch(logoutUserAction());
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="info" expand="lg">
        <Container>
          <div className="div">
            {user?._id && (
              <i
                className="fa-sharp fa-solid fa-burger"
                onClick={handleShow}
              ></i>
            )}{" "}
            {""}
            <Navbar.Brand href="#home">CMS Panel</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user?._id ? (
                <>
                  <Link to="/admin-profile" className="nav-link">
                    <i className="fa-solid fa-user"></i> Profile
                  </Link>
                  <Link to="/" className="nav-link" onClick={handleOnLogout}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
