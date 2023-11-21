import React, { useState, useContext } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import QuantityContext from "../context/productquantity/quantityContext";
import DetailContext from "../context/productdetail/detailContext";

const Buybitpro1 = (props) => {
  const [showAlerts, setshowAlerts] = useState(false);
  const navigate = useNavigate();
  const { quantity, increase, decrease } = useContext(QuantityContext);
  const { setDetailValues } = useContext(DetailContext);
//   const { detail } = useContext(DetailContext);
  const { title, description, imgsrc, dollar } = props;
  const handleAddToCart = async (e) => {
    e.preventDefault();
    setshowAlerts(true);
    // Set the title and dollar values in the DetailContext
    setDetailValues(title, dollar);
    setTimeout(() => {
      setshowAlerts(false);
      navigate("/showcart");
    }, 3000);
    // Calculate the total price based on the quantity and dollar amount
    const totalPrice = parseFloat(dollar.slice(1)) * quantity;

    const product = {
      title: title,
      quantity: quantity,
      totalPrice: totalPrice,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(product);
    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <div className="product">
      {showAlerts && <Alert type="success" msg="Your Product Has Been Successfully Added To Cart!" />}
      <div className="text-center prod-title">
        <h1>{title}</h1>
      </div>
      <div className="container d-flex prod">
        <div>
          <img src={imgsrc} style={{ borderRadius: "4px" }} className="prod-image" alt="..." />
        </div>
        <div className="mx-4 my-4 prod-all">
          <h3 className="mb-3 mt-3 prod-price">{dollar}</h3>
          <h6 className="prod-desc">{description}</h6>
          <div className="d-inline-flex">
            <button className="btn btn-dark me-2" onClick={decrease}>
              <strong>-</strong>
            </button>
            <h5>{quantity}</h5>
            <button className="btn btn-dark ms-2 me-4" onClick={increase}>
              <strong>+</strong>
            </button>
          </div>
          <a href="#" className="btn my-3 button" onClick={handleAddToCart}>
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Buybitpro1;
