import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import watch from '../images/watch.jpg'
import watch2 from '../images/watch2.jpg'
import watch3 from '../images/watch3.jpg'
import phone1 from '../images/phone1.jpg'
import phone2 from '../images/phone2.jpg'
import watch4 from '../images/watch4.jpg'
import hd2 from '../images/hd2.jpg'
import hd3 from '../images/hd3.jpg'



import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'
import wish from '../images/wish.svg'
import prodcompare from '../images/prodcompare.svg'
import camera_featrued1 from '../images/camera-featured1.jpg'
import camera_featrued from '../images/cd.jpg'
import headphone_featured from '../images/headphone_featured.jpg'
import headphone_featured1 from '../images/headphone_featured1.jpg'
import smart_tv_featured1 from '../images/smart_tv_featured1.jpg'
import smart_tv_featured from '../images/smart_tv_featured.jpg'
import smartphone_featured from '../images/samrtphone_featured.jpg'
import smartphone_featured1 from '../images/samrtphone_featured1.jpg'

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={watch2}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={camera_featrued1}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={camera_featrued}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={headphone_featured}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={headphone_featured1}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={smart_tv_featured1}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={smart_tv_featured}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={smartphone_featured}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={smartphone_featured1}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch3}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={watch4}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>

      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={phone1}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={phone2}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>


      <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == '/' ? '/product/:id' :
          location.pathname == '/product/:id' ? '/product/:id' : ':id'}`} className="product-card position-relative" >
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src={hd2}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={hd3}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              quisquam aspernatur quas molestias vitae, nam officiis iusto
              corporis sint. Voluptatibus magnam quia ducimus consequuntur.
            </p>
            <p className="price">$100.0</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;