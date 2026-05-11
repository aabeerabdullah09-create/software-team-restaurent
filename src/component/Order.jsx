import { useState } from "react";
import "../product.css";

import { foodData } from "../Data/fooddata";
import { drinkData } from "../Data/drinkdata";
import { dessertData } from "../Data/dessertdata";
import { useParams } from "react-router-dom";
import Header from "./Header.jsx";
import TopTabs from "./TopTabls.jsx";
import Logoo from "./Logo.jsx";

function Order() {
  const { id } = useParams();
  console.log("Order ID:", id);
  const [cart, setCart] = useState([]);

  const products = [
    ...Object.values(foodData).flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        category: category.title,
      }))
    ),

    ...Object.values(drinkData).flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        category: category.title,
      }))
    ),

    ...Object.values(dessertData).flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        category: category.title,
      }))
    ),
  ];

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find(
        (item) => item.name === product.name
      );

      if (exist) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (index) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (index) => {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const total = cart.reduce((sum, item) => {
    if (typeof item.price === "number") {
      return sum + item.price * item.qty;
    }
    return sum;
  }, 0);

  return (
    <>                                             
    <Header/>                                     
    <div className="relative mt-10 md:mt-4 z-20"> 
      <TopTabs/>                                  
    </div>                                       
    <div className="absolute top-20 left-4 z-30">
      <Logoo/>                                 
    </div>  

    <div className="restaurant-app">
      <div className="banner">
        <h1>🍴 Order Menu</h1>
        <p>Choose your favorite items from Vanilla</p>
      </div>

      <div className="products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />

            <div className="product-info">
              <h3>{product.name}</h3>

              <span className="category">
                {product.category}
              </span>

              <p className="price">
                {product.price} ₪
              </p>

              {product.description && (
                <p className="description">
                  {product.description}
                </p>
              )}

              <button
                className="add-btn"
                onClick={() => addToCart(product)}
              >
                Add To Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2>🛒 Your Order</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-left">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />

                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price} ₪</p>
                </div>
              </div>

              <div className="cart-controls">
                <button onClick={() => decreaseQty(index)}>
                  -
                </button>

                <span>{item.qty}</span>

                <button onClick={() => increaseQty(index)}>
                  +
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  ✖
                </button>
              </div>
            </div>
          ))
        )}

        <div className="total">
          <h3>Total: {total.toFixed(2)} ₪</h3>
        </div>

        {cart.length > 0 && (
          <button
            className="checkout-btn"
            onClick={() =>
              alert("Your order has been placed 🍴")
            }
          >
            Place Order
          </button>
        )}
      </div>
    </div>
     </>
  );
}

export default Order;
