import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"cart"} />
      <BreadCrumb title="cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center ">
                <div className="cart-col-1 mb-2 d-flex align-items-center gap-15 ">
                  <div className="w-25">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="product image"
                    />
                  </div>
                  <div className="w-75">
                    <p> ooffdgh</p>
                    <p>Size: ghf</p>
                    <p>olor: hsh</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">% 100gg</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      min={1}
                      max={10}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <MdDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue to Shopping
                </Link>
                <div className="d-flex flex-column justify-content-end align-items-end">
                  <h4>SubToltal:$ 100</h4>
                  <p>Taxes and Shipping charges are included in checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;