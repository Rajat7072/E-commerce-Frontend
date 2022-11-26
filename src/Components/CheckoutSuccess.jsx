import React from "react";
import happy from "../images/happy.gif";

const CheckoutSuccess = () => {
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "green" }}>Order Status</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10% 10% 2% 10%",
        }}
      >
        <h3
          style={{
            color: "black",
            background: "lightgreen",
            padding: "20px",
            width: "fit-center",
            border: "2px solid green",
            boxShadow: "1px 1px 5px rgba(1,1,1,1)",
          }}
        >
          Order Placed Successfully
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            boxShadow: "1px 1px 5px rgba(1,1,1,1)",
            border: "2px solid black",
          }}
          src={happy}
          alt="HappyGIF"
        />
      </div>
    </div>
  );
};

export default CheckoutSuccess;
