import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  decreaseCart,
  increaseCart,
  removeFromCart,
  totalAmout,
} from "../createSlice/cartSlice";
import PayButton from "./PayButton";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(totalAmout());
  }, [cart, dispatch]);

  const handleDecrease = (element) => {
    dispatch(decreaseCart(element));
  };
  const handleIncrease = (element) => {
    dispatch(increaseCart(element));
  };
  const removeCart = (element) => {
    dispatch(removeFromCart(element));
  };

  return (
    <>
      {cart.cartItem.length === 0 ? (
        <div className="container" style={{ textAlign: "center" }}>
          <h4>Your cart is currenty Empty</h4>
        </div>
      ) : (
        <div style={{ padding: "20px" }}>
          {cart.cartItem?.map((element) => (
            <div className="cartitem" key={element._id}>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <img
                        src={element.image}
                        alt="image1"
                        style={{ maxWidth: "10rem" }}
                      />
                    </Col>
                    <Col>
                      <h5>{element.title}</h5>
                      <Button
                        onClick={() => removeCart(element)}
                        style={{
                          borderRadius: "10px",
                          height: "25px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        variant="outline-danger"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <h5>
                    <i className="fa fa-rupee" aria-hidden="true"></i>
                    &nbsp; {element.price}
                  </h5>
                </Col>
                <Col>
                  <div className="container">
                    <button onClick={() => handleDecrease(element)}>-</button>
                    &nbsp; {element.cartTotalQty}
                    &nbsp;
                    <button onClick={() => handleIncrease(element)}>+</button>
                  </div>
                </Col>
                <Col>
                  <h5>
                    <i className="fa fa-rupee" aria-hidden="true"></i>
                    &nbsp;{element.cartTotalQty * element.price}
                  </h5>
                </Col>
              </Row>
              <hr />
            </div>
          ))}
          <div style={{ textAlign: "right", margin: "3px" }}>
            <div>
              <h4>
                <i className="fa fa-rupee" aria-hidden="true"></i>
                {parseFloat(cart.cartTotalAmt).toFixed(2)}
              </h4>
            </div>
            <PayButton cartItem={cart.cartItem} />
            <hr />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
