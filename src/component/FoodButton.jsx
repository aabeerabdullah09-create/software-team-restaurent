import { NavLink } from "react-router-dom";
const FoodButton = () => {
    const linkClasses = ({ isActive }) =>
        `text-white text-s hover:text-gray-300 transition ${isActive ? "border-b-2 border-white" : ""
        }`;
    return (
        <nav className="flex justify-center mt-0 mb-6 gap-6">
            <NavLink to="/Foodpage/333cc771-8218-4d47-b72e-3a6aa2bfb51e" className={linkClasses}>
                Breakfast
            </NavLink>
            <NavLink to="/Foodpage/c3be4e0a-fccf-45b4-abba-9ce2185bcf22" className={linkClasses}>
                Salads
            </NavLink>
            <NavLink to="/Foodpage/b5578a43-f4ac-4de4-b623-83da19ce08ca" className={linkClasses}>
                Burger
            </NavLink>
            <NavLink to="/Foodpage/0d3bd197-3f23-42e3-97ec-1ca2a4cdcb35" className={linkClasses}>
                Pasta
            </NavLink>
            <NavLink to="/Foodpage/7cf629d5-b7a2-4424-ad15-f283e36b2668" className={linkClasses}>
                Pizza
            </NavLink>
            <NavLink to="/Foodpage/9a573772-5c20-4a4a-9100-162e3bfed9cc" className={linkClasses}>              
                  International
            </NavLink>
            <NavLink to="/Foodpage/6eb7a29e-aae3-4649-9349-83ea90cc8e7c" className={linkClasses}>              
                  Meats
            </NavLink>
        </nav>
    );
};

export default FoodButton;



