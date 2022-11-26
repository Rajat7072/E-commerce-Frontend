import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PlaceOrder = () => {
  return (
    <div className="container my-3">
      <h2>PAYMENT METHOD</h2>
      <h6 className="my-4" style={{ color: "grey" }}>
        SELECT PAYMENT METHOD
      </h6>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="checkmark"
            type="radio"
            id="paypal"
            label="PayPal"
            value="paypal"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="checkmark"
            type="radio"
            id="Gpay"
            label="GooglePay"
            value="GooglePay"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="checkmark"
            type="radio"
            id="Phonepay"
            label="PhonePay"
            value="Phonepay"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="checkmark"
            class="checkmark"
            type="radio"
            id="PayTM"
            label="PAYTM"
            value="PayTM"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="checkmark"
            type="radio"
            id="CreditCard"
            label="CreditCard"
            value="CreditCard"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            name="checkmark"
            type="radio"
            id="cod"
            label="COD"
            value="COD"
          />
        </Form.Group>

        <Button type="submit">
          Proceed To Payment &nbsp; <i class="fa-solid fa-arrow-right"></i>
        </Button>
      </Form>
    </div>
  );
};

export default PlaceOrder;
