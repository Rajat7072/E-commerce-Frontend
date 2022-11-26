import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { shippingAddressApi } from "../createApi/shippingAddressApi";
import { useDispatch } from "react-redux";
import { addressDetailReducer } from "../createSlice/addressSlice";

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    AdminName: "",
    name: "",
    address_one: "",
    address_two: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
  });
  //setAddress({ ...address, AdminName: localStorage.getItem("userDetail") });
  const handleText = (e) => {
    setAddress({
      ...address,
      AdminName: JSON.parse(localStorage.getItem("userDetail")),
      [e.target.name]: e.target.value,
    });
    console.log(address);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      AdminName,
      name,
      address_one,
      address_two,
      city,
      state,
      zipcode,
      phone,
    } = address;
    if (
      AdminName === "" ||
      name === "" ||
      address_one === "" ||
      address_two === "" ||
      city === "" ||
      state === "" ||
      zipcode === "" ||
      phone === ""
    ) {
      toast.warn("Empty Missing Fields", {
        position: "bottom-left",
      });
    } else {
      shippingAddressApi({
        AdminName,
        name,
        address_one,
        address_two,
        city,
        state,
        zipcode,
        phone,
      });
      dispatch(addressDetailReducer(address));
      toast.info("Address saved successfully", {
        position: "bottom-left",
      });
      window.location.href = "/cart";
    }
  };
  return (
    <Form
      className="container my-3"
      style={{
        width: "50%",
        boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
        padding: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <div className="container" style={{ width: "50%" }}>
        <h2>ADDRESS DETAILS</h2>
      </div>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={address?.name}
          type="text"
          placeholder="Enter name"
          onChange={handleText}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address line 1</Form.Label>
        <Form.Control
          name="address_one"
          value={address?.address_one}
          type="text"
          placeholder="Address_one"
          onChange={handleText}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address line 1</Form.Label>
        <Form.Control
          name="address_two"
          value={address?.address_two}
          type="text"
          placeholder="Address 2"
          onChange={handleText}
        />
      </Form.Group>
      <Row>
        <Form.Group className="col-md-6 mb-3">
          <Form.Label>City</Form.Label>
          <Form.Select
            name="city"
            value={address?.city}
            id="city"
            className="form-select"
            onChange={handleText}
          >
            <option>Choose...</option>
            <option>Kanpur</option>
            <option>Lucknow</option>
            <option>Meerut</option>
            <option>Kannauj</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="col-md-6 mb-3">
          <Form.Label>Input State</Form.Label>
          <Form.Select
            name="state"
            value={address?.state}
            id="inputState"
            className="form-select"
            onChange={handleText}
          >
            <option>Choose...</option>
            <option>Uttar Pradesh</option>
            <option>Andra Pradesh</option>
            <option>Delhi</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="col-md-6 mb-3">
          <Form.Label>Enter Mobile Number</Form.Label>
          <Form.Control
            name="phone"
            value={address?.phone}
            type="text"
            placeholder="Mobile Number"
            onChange={handleText}
          />
        </Form.Group>
        <Form.Group className="col-md-6 mb-3">
          <Form.Label>Zip-Code</Form.Label>
          <Form.Control
            name="zipcode"
            value={address?.zipcode}
            type="text"
            placeholder="Zip-Code"
            onChange={handleText}
          />
        </Form.Group>
      </Row>
      <div className="container my-2" style={{ width: "40%" }}>
        <Button variant="dark" type="submit">
          Click Here To Continue
        </Button>
      </div>
    </Form>
  );
};

export default ShippingAddress;
