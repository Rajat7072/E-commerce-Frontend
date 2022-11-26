import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import NoteContext from "../contextApi/NoteContext";
import Logout from "./Logout";

const Header = () => {
  const { smShow, setSmShow } = useContext(NoteContext);

  // localStorage.removeItem("cartItems");
  // localStorage.removeItem("userDetail");
  // localStorage.removeItem("authtoken");
  const cart = useSelector((state) => state.cart.cartTotalQty);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link
            to="/api/ProductRouter/products"
            style={{ textDecoration: "none" }}
          >
            <Navbar.Brand>ONLINE SHOP</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ width: "100%", justifyContent: "end" }}
            >
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div
                  className="container"
                  style={{ color: "white", marginTop: "12px" }}
                >
                  <i className="fa-regular fa-user"></i>
                  &nbsp;
                  {!localStorage.getItem("userDetail")
                    ? "Login"
                    : JSON.parse(localStorage.getItem("userDetail")).name}
                </div>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <div
                  className="container"
                  style={{ color: "white", marginTop: "12px" }}
                >
                  <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                  &nbsp; Cart
                </div>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <span className="bag-quantity">
                  <span>{cart}</span>
                </span>
              </Link>
              {localStorage.getItem("userDetail") && (
                <>
                  <Button
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "3px",
                    }}
                    onClick={() => setSmShow(true)}
                    variant="outline-dark"
                  >
                    Logout &nbsp;
                    <i
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "5px",
                      }}
                      className="fa-sharp fa-solid fa-arrow-right-from-bracket"
                    ></i>
                  </Button>
                  <Logout />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
