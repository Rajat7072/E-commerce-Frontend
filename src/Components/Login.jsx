import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { loginfetch } from "../createApi/LoginApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email === "" || password === "") {
      toast.error("Feilds can not be empty", {
        position: "bottom-left",
        theme: "dark",
        icon: "😕",
      });
    } else {
      const Response_data = await loginfetch({ email, password });
      if (Response_data) {
        window.location.href = "/api/ProductRouter/products";
      }
    }
  };
  const handleText = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div style={{ width: "100%", textAlign: "center", padding: "10px" }}>
            <h3>LOGIN</h3>
          </div>
          <hr style={{ color: "red", border: "2px solid red" }}></hr>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            //id="email"
            name="email"
            value={user?.email}
            onChange={handleText}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            //id="password"
            name="password"
            value={user?.password}
            onChange={handleText}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div
          className="container"
          style={{ padding: "20px", marginLeft: "20px" }}
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            create an account
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
