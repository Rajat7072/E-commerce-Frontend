import "./App.css";
import Header from "./Components/header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/CartHeader";
import Login from "./Components/Login";
import ProductDetail from "./Components/ProductDetail";
import Welcome from "./Components/welcome";
import NoteState from "./contextApi/NoteState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp";
import PlaceOrder from "./Components/PlaceOrder";
import ShippingAddress from "./Components/ShippingAddress";
import CheckoutSuccess from "./Components/CheckoutSuccess";
import Notfound from "./Components/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NoteState>
          <Header />
          <Routes>
            <Route>
              <Route index element={<Welcome />}></Route>
              <Route
                path="/api/ProductRouter/products"
                element={<Home />}
              ></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route
                path="/shippingAddress"
                element={<ShippingAddress />}
              ></Route>
              <Route
                path="/payment-successful"
                element={<CheckoutSuccess />}
              ></Route>
              <Route path="/PlaceOrder" element={<PlaceOrder />}></Route>
              <Route
                path="/api/id/productdetail/:id"
                exact
                element={<ProductDetail />}
              ></Route>
              <Route path="*" exact element={<Notfound />}></Route>
            </Route>
          </Routes>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
