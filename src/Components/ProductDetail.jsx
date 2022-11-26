import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroupItem, Button } from "react-bootstrap";
import Rating from "../Components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductDetailQuery } from "../createApi/productDetailApi";
import Spinner from "./Spinner";
import Basicdropdown from "./Dropdown";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import NoteContext from "../contextApi/NoteContext";
import { addToCart } from "../createSlice/cartSlice";
import { totalAmout } from "../createSlice/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();

  // const { qty } = useContext(NoteContext);
  // const navigate = useNavigate();
  //Defining the id value of a particular product
  //const { id } = useParams();

  //let product = Product;
  //let find_id = product.find((p) => p.id == params.id);

  const { id } = useParams();
  // const [Product, setProduct] = useState([]);
  const { data, error, isLoading } = useGetProductDetailQuery(id);

  // let fetch_user = async (id) => {
  //   const { data } = await axios.get(`/api/id/productdetail/${id}`);
  //   setProduct(data);
  // };
  // useEffect(() => {
  //   setProduct([data]);
  //   console.log(data);
  //   console.log(isLoading);
  // }, [id, data]);
  // const Product = [];
  const handleToCart = (data) => {
    dispatch(addToCart(data));
    //navigate(`/cart/${id}?qty=${qty}`);
  };
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(totalAmout());
  }, [cart, dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : error ? (
        <h2>An error occured</h2>
      ) : (
        <div className="container my-3" style={{ backgroundColor: "#fcfcfc" }}>
          <Link to="/api/ProductRouter/products" className="btn">
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
            &nbsp; Go Back
          </Link>
          <Row>
            <Col md={5}>
              <Image
                src={data?.image}
                alt={data?.title}
                fluid
                style={{ height: "400px", width: "290px" }}
              />
            </Col>
            <Col className="my-3">
              <ListGroupItem>
                <h3>{data?.title}</h3>
              </ListGroupItem>
              <hr />
              <ListGroupItem>
                <Col>
                  <b>
                    Rating: {data?.rating[0]?.rate}{" "}
                    <b>{data?.rating[0]?.count} Reviews</b>
                  </b>
                </Col>
                <Col>{<Rating Rating_star={data?.rating[0]?.rate} />}</Col>
              </ListGroupItem>
              <ListGroupItem className="my-1">
                price: &nbsp;
                <i className="fa fa-rupee" aria-hidden="true"></i>
                &nbsp;
                {data?.price}
              </ListGroupItem>
              <hr />
              <ListGroupItem className="my-2">
                <h5>{data?.description}</h5>
              </ListGroupItem>
              <hr />
              <ListGroupItem>
                <Row>
                  <Col>
                    <Basicdropdown />
                  </Col>
                  <Col>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleToCart(data)}
                    >
                      Add To Cart
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </Col>
          </Row>
        </div>
      )}
      {/* {Product.length !== 0 && (
        <div className="container my-3" style={{ backgroundColor: "#fcfcfc" }}>
          <Link to="/api/ProductRouter/products" className="btn">
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
            &nbsp; Go Back
          </Link>
          <Row>
            <Col md={5}>
              <Image
                src={Product?.image}
                alt={Product?.title}
                fluid
                style={{ height: "400px", width: "290px" }}
              />
            </Col>
            <Col className="my-3">
              <ListGroupItem>
                <h3>{Product?.title}</h3>
              </ListGroupItem>
              <hr />
              <ListGroupItem>
                <Col>
                  <b>
                    Rating: {Product?.rating[0]?.rate}{" "}
                    <b>{Product?.rating[0]?.count} Reviews</b>
                  </b>
                </Col>
                <Col>{<Rating Rating_star={Product?.rating[0]?.rate} />}</Col>
              </ListGroupItem>
              <ListGroupItem className="my-1">
                price: &nbsp;
                <i className="fa fa-rupee" aria-hidden="true"></i>
                &nbsp;
                {Product?.price}
              </ListGroupItem>
              <hr />
              <ListGroupItem className="my-2">
                <h5>{Product?.description}</h5>
              </ListGroupItem>
              <hr />
              <ListGroupItem>
                <Button variant="outline-dark">Add To Cart</Button>
              </ListGroupItem>
            </Col>
          </Row>
        </div>
      )} */}
    </>
  );
};

export default ProductDetail;
