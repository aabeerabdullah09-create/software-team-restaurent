import Header from "../component/Header.jsx";
import TopTabs from "../component/TopTabls.jsx";
import Logoo from "../component/Logo.jsx";
import DessertButton from "../component/DessertButton.jsx";
import DessertCategory from "../component/DessertCategory.jsx";

const Dessertpage = () => {
  return (
    <>
      <Header />
      <TopTabs />
      <Logoo />
      <DessertButton />
      <hr className="-my-3 border-white/20" />
      <DessertCategory />
    </>
  );
};

export default Dessertpage;
