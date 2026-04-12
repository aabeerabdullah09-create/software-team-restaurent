import { NavLink } from "react-router-dom";

const TopTabs = () => {
    const scrollToMenu = () => {
        const section = document.getElementById("menu-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navClass = (isActive) =>
        isActive
            ? "text-white text-sm font-medium border-b-2 border-white pb-1"
            : "text-gray-300 text-sm";

    return (
        <div className="flex justify-center gap-6 py-4">
            <NavLink to="/Mainpage"
          className={({ isActive }) => navClass(isActive)}>
                Home
            </NavLink>
            <NavLink to="/Foodpage/333cc771-8218-4d47-b72e-3a6aa2bfb51e"
            className={({ isActive }) => navClass(isActive)}>
                Food
            </NavLink>
            <NavLink to="/Drinkspage/6513012c-768a-41fc-83f0-d0095c8f14bb"
             className={({ isActive }) => navClass(isActive)}>
                Drinks
            </NavLink>
            <NavLink to="/Dessertpage/5bd4f6eb-0339-4567-8319-76b5292c0e08"
             className={({ isActive }) => navClass(isActive)}>
                Dessert
            </NavLink>
           
            <NavLink to="/VanillaStoryPage"
            className={({ isActive }) => navClass(isActive)}>
                Our Story
            </NavLink>
        </div>
    );
};

export default TopTabs;
