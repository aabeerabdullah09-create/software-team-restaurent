import "../product.css";

import { foodData } from "../Data/fooddata";
import { drinkData } from "../Data/drinkdata";
import { dessertData } from "../Data/dessertdata";

function Order({ cart, setCart }) {
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
      const exist = prev.find((item) => item.name === product.name);

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

  return (
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

              <span className="category">{product.category}</span>

              <p className="price">{product.price} ₪</p>

              {product.description && (
                <p className="description">{product.description}</p>
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
    </div>
  );
}

export default Order;