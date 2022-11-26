import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { signupPush } from "../createApi/SignUp";

const SignUp = () => {
  const [detail, setdetail] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = detail;
    if (name === "" || email === "" || password === "" || cpassword === "") {
      toast.warn("Fields can not be Empty", {
        position: "bottom-left",
        icon: "❗",
        theme: "dark",
      });
    } else if (password !== cpassword) {
      toast.warn("Password Mismatch", {
        position: "bottom-left",
        icon: "❗",
        theme: "dark",
      });
    } else {
      signupPush({ name, email, password });
    }
  };
  const handleText = (e) => {
    setdetail({ ...detail, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div
        style={{
          padding: "80px ",
        }}
      >
        <Form
          style={{
            maxWidth: "320px",
            width: "90%",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "4px",
            color: "#505e6c",
            boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
          }}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <div
              style={{ width: "100%", textAlign: "center", padding: "10px" }}
            >
              <h3>SIGNUP</h3>
            </div>
            <hr style={{ color: "red", border: "2px solid red" }}></hr>
            <Form.Label className="form-group">Enter Your Full Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              id="name"
              name="name"
              value={detail?.name}
              onChange={handleText}
            />
            <Form.Label className="form-group">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              value={detail?.email}
              onChange={handleText}
            />

            <Form.Label className="form-group">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={detail?.password}
              onChange={handleText}
            />
            <Form.Label className="form-group">Re-enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm-Password"
              id="cpassword"
              name="cpassword"
              value={detail?.cpassword}
              onChange={handleText}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div style={{ paddingTop: "10px" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Already Registered Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
