import { NavLink } from "react-router-dom";
const DrinkButton = () => {
    const linkClasses = ({ isActive }) =>
        `text-white text-sm hover:text-gray-300 transition ${
            isActive ? "border-b-2 border-white" : ""
        }`;

    return (
        <nav className="flex flex-wrap justify-center gap-6 mt-2 mb-6">
            <NavLink to="/Drinkspage/6513012c-768a-41fc-83f0-d0095c8f14bb"
              className={linkClasses}>
                Espresso
            </NavLink>
            <NavLink to="/Drinkspage/d6c3aefc-ef4d-4fcd-8323-1c7a57be2812"
                     className={linkClasses}>
                Hot Baverages
            </NavLink>
            <NavLink to="/Drinkspage/9c935ab9-1ad2-4634-8796-13aa87021c6b"
                     className={linkClasses}>
                Iced Espresso
            </NavLink>
            <NavLink to="/Drinkspage/6b578900-3f7b-460d-954d-f9bf0e95ae60"
                     className={linkClasses}>
                Iced & Colds
            </NavLink>
            <NavLink to="/Drinkspage/e7531b71-e444-490a-b3ce-0d7245ad70d3"
                     className={linkClasses}>
                Healthy Drinks
            </NavLink>
            <NavLink to="/Drinkspage/28c41abf-826a-4787-9dcf-e19692b5d5f3"
                     className={linkClasses}>
                Cracking Drinks
            </NavLink>
            <NavLink to="/Drinkspage/5cc28c97-9e1e-48a9-bdad-425469dde126"
                     className={linkClasses}>
                MilkShakes
            </NavLink>
            <NavLink to="/Drinkspage/c5d0c6c0-2491-4674-bd2c-91d9211e0a86"
                     className={linkClasses}>
                Smothies
            </NavLink>
            <NavLink to="/Drinkspage/f10993be-8af2-4d7b-a7d9-936722d9418a"
                     className={linkClasses}>
                Fresh Juice
            </NavLink>
            <NavLink to="/Drinkspage/cb6b97e5-b5d7-4183-a4a0-002286c0843c"
                     className={linkClasses}>
                Ice cream
            </NavLink>

        </nav>
    );
};

export default DrinkButton;