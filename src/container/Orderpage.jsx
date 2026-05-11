import Header from "../component/Header.jsx";
import TopTabs from "../component/TopTabls.jsx";
import Logoo from "../component/Logo.jsx";
import Order from "../component/Order.jsx";

const Orderpage = ({ cart, setCart }) => {
  return (
    <>
      <Header />
      <TopTabs cartCount={cart.length} />
      <Logoo />
      <Order cart={cart} setCart={setCart} />
    </>
  );
};

export default Orderpage;