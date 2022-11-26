import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { paymentApi } from "../createApi/paymentApi";
import { useState } from "react";

const PayButton = (props) => {
  const [btnsuccess, setbtnsuccess] = useState(true);
  const navigate = useNavigate();
  const { cartItem } = props;
  const user = JSON.parse(localStorage.getItem("userDetail"));
  //console.log({ cartItem });
  const handleClick = () => {
    if (localStorage.getItem("userDetail")) {
      if (localStorage.getItem("addressDetailStorage")) {
        paymentApi({ cartItem: cartItem, userId: user._id }).then(
          (response) => (window.location.href = `${response}`)
        );
        toast.success("Please wait redirecting to payment gateway", {
          position: "bottom-center",
        });
      } else {
        toast.warn("Please Enter Your Address", {
          position: "bottom-left",
        });
        navigate("/shippingAddress");
      }
    } else {
      toast.warn("You have to login first", {
        position: "bottom-left",
      });
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        <Button
          onClick={() => {
            handleClick();
          }}
          variant="outline-success"
        >
          PLACE ORDER
        </Button>
      </div>
    </>
  );
};

export default PayButton;
