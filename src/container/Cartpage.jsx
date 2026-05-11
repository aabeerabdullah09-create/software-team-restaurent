import Header from "../component/Header.jsx";
import TopTabs from "../component/TopTabls.jsx";
import Logoo from "../component/Logo.jsx";
import "../product.css";

const Cartpage = ({ cart = [], setCart }) => {
      const increaseQty = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (index) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => {
    if (typeof item.price === "number") {
      return sum + item.price * item.qty;
    }
    return sum;
  }, 0);

  const confirmOrder = () => {
    alert("Your order has been sent to the cashier 🍴");
  };

  return (
    <>
      <Header />
      <TopTabs cartCount={cart.length} />
      <Logoo />

      <div className="restaurant-app">
        <div className="cart-section">
          <h2>🛒 Your Order</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-left">
                  <img src={item.image} alt={item.name} className="cart-img" />

                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price} ₪</p>
                  </div>
                </div>

                <div className="cart-controls">
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(index)}>+</button>

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
            <button className="checkout-btn" onClick={confirmOrder}>
              Confirm Order
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cartpage;