import React from "react";
import { Col, Row } from "react-bootstrap";
import Cart from "./Cart";
import PlaceOrderAddress from "./PlaceOrderAddress";

const CartHeader = () => {
  return (
    <>
      <PlaceOrderAddress />
      <div style={{ padding: "3px" }}>
        <Row>
          <Col>
            <h5>Product</h5>
          </Col>
          <Col>
            <h5>Price</h5>
          </Col>
          <Col>
            <h5>Quantity</h5>
          </Col>
          <Col>
            <h5>Total Price</h5>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="container" style={{ textAlign: "center" }}></div>
      <Cart />
    </>
  );
};

export default CartHeader;
