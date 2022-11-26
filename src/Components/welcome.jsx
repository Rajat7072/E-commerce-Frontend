import React from "react";
import img from "../images/shoppingcart.webp";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { totalAmout } from "../createSlice/cartSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(totalAmout());
  }, [cart, dispatch]);
  const [ctime, setctime] = useState(new Date().toLocaleTimeString());
  const UpdateTime = async () => {
    let time = new Date().toLocaleTimeString();
    setctime(time);
  };
  const navigateProduct = () => {
    navigate("/api/ProductRouter/products");
  };
  setInterval(UpdateTime, 1000);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={img}
        alt="shopping"
        style={{ width: "100%", height: "704px" }}
      />
      <Button
        onClick={navigateProduct}
        style={{
          position: "absolute",
          top: "50%",
          left: "20%",
          fontSize: "20px",
        }}
        variant="dark"
        size="lg"
      >
        Click Here To Grab Deals Now &nbsp; {ctime} &nbsp;
        <i className="fa-solid fa-arrow-right"></i>
      </Button>
    </div>
  );
};

export default Welcome;
