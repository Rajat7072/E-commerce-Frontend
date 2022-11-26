import React, { useEffect } from "react";
import ProductScreen from "./ProductScreen";
import { Row, Col } from "react-bootstrap";
import { useGetAllProductsQuery } from "../createApi/productApi";
import Spinner from "./Spinner";

const Home = () => {
  //const Products = products;
  // const [Products, setProducts] = useState([]);
  // const dispatch = useDispatch();
  // const Products = useSelector((state) => state.productListReducers);
  // const { products, status, error } = Products;
  const { data, error, isLoading } = useGetAllProductsQuery();
  useEffect(() => {
    // let fetchdata = async () => {
    //   const { data } = await axios.get(
    //     "http://localhost:8080/api/ProductRouter/products"
    //   );
    //   setProducts(data);
    // };
    // fetchdata();
    // dispatch(productsFetch());
  }, []);
  // const Products = [];
  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : error ? (
        <h3>An error occured</h3>
      ) : (
        <Row style={{ marginTop: "50px", marginLeft: "10px" }}>
          {data.map((element) => (
            <Col md={3} key={element._id}>
              <ProductScreen product={element} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
