import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const ProductScreen = (props) => {
  let { product } = props;

  return (
    <>
      <Card className="rounded my-3" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{product.title.substring(0, 25) + "..."}</Card.Title>
          <Card.Text>{product.description.substring(0, 50) + "..."}</Card.Text>
          <Card.Text>&#8377; {product.price}</Card.Text>
          <div>
            <Rating Rating_star={product.rating[0].rate} />
          </div>
          <Link to={`/api/id/productdetail/${product._id}`}>
            <Button variant="primary" className="rounded">
              More Info
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
