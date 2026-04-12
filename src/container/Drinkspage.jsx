import Header from "../component/Header.jsx"
import TopTabs from "../component/TopTabls.jsx";
import Logoo from "../component/Logo.jsx";
import DrinkButton from "../component/DrinkButton.jsx";
import DrinkCategory from "../component/Drinkcategory.jsx";


const Drinkspage=()=>{
    return(
        <>
            <Header/>
            <div
                className="relative mt-10 md:mt-4 z-20">
                <TopTabs/>
            </div>
            <div className="absolute top-20 left-4 z-30">
                <Logoo/>
            </div>
            <DrinkButton/>
            <hr className="-my-3 border-white/20" />
            <DrinkCategory/>





        </>
    );
};
export default Drinkspage;