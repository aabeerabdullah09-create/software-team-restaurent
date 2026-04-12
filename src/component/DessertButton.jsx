import { NavLink } from "react-router-dom";

const DessertButton = () => {
  const linkClasses = ({ isActive }) =>
    `text-white text-s hover:text-gray-300 transition ${
      isActive ? "border-b-2 border-white" : ""
    }`;

  return (
    <nav className="flex justify-center mt-0 mb-6 gap-6">
      <NavLink to="/Dessertpage/5bd4f6eb-0339-4567-8319-76b5292c0e08" className={linkClasses}>
        Dessert
      </NavLink>

      <NavLink to="/Dessertpage/55ba3b3e-7b35-4ade-921a-58133a71e468" className={linkClasses}>
        Cookies
      </NavLink>

      <NavLink to="/Dessertpage/24dd5fe7-da24-4ad7-b118-62fd5d37fe9f" className={linkClasses}>
        Macarons
      </NavLink>

      <NavLink to ="/Dessertpage/aa902888-f4d3-4af8-b01e-8a3e7492cb91" className={linkClasses}>
        Cakes
      </NavLink>
    </nav>
  );
};

export default DessertButton;