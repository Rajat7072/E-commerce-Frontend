import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrderAddress = () => {
  const address = useSelector((state) => state.address);
  console.log(address);
  const navigate = useNavigate();
  const handleAddress = () => {
    if (localStorage.getItem("addressDetailStorage")) {
      toast.info("Please Login First", {
        position: "bottom-left",
        theme: "colored",
      });
      navigate("/login");
    } else {
      navigate("/shippingAddress");
    }
  };
  return (
    <>
      {address.addressDetail.length !== 0 ? (
        <>
          <div
            className="my-2 mx-1"
            style={{
              boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
              padding: "10px",
              display: "flex",
            }}
          >
            <div style={{ width: "80%" }}>
              <div style={{ display: "flex", lineHeight: "0px" }}>
                <p>Deliver to:</p>
                <p>
                  <b> {address.addressDetail.name} </b>
                </p>
              </div>
              <div style={{ display: "flex", color: "gray" }}>
                <p>
                  {address.addressDetail.address_one},{" "}
                  {address.addressDetail.address_two}{" "}
                  {address.addressDetail.city}, {address.addressDetail.state}{" "}
                  {address.addressDetail.zipcode}
                </p>
              </div>

              <div
                style={{ display: "flex", color: "gray", lineHeight: "0px" }}
              >
                <p>
                  <b style={{ color: "black" }}>Tel:</b>{" "}
                  {address.addressDetail.phone}
                </p>
              </div>
            </div>
            <div style={{ width: "20%", textAlign: "right" }}>
              <Button onClick={handleAddress} variant="outline-dark">
                Add New Address
              </Button>
            </div>
          </div>
          <hr />
        </>
      ) : (
        <>
          <div
            className="my-3"
            style={{
              width: "100%",
              textAlign: "right",
              boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
              padding: "10px",
            }}
          >
            <Button onClick={handleAddress} variant="outline-dark">
              Add New Address
            </Button>
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default PlaceOrderAddress;
