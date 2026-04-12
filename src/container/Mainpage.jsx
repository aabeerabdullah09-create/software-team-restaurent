import Header from "../component/Header.jsx";
import Restphoto from "../component/Restphoto.jsx";
import TopTabs from "../component/TopTabls.jsx";
import Logoo from "../component/Logo.jsx";
import Buttontomenu from "../component/Buttontomenu.jsx";
const Mainpage = () =>{
    return(
        <>
            <div className="relative h-screen">
                <Restphoto/>
                <div>
                    <Header/>
                </div>
                <div className="absolute top-20 left-4 z-30">
                    <Logoo  />
                </div>

                <div
                    className="relative mt-10 md:mt-5 z-20">
                    <TopTabs />
                </div>
                <div className="absolute top-200 md:top-90 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif
                   text-white z-20 text-center">
                    - WELCOME TO OUR RESTAURANT -
                </div>
                <div>
                    <Buttontomenu />
                </div>

            </div>
        </>
    );
}
export default Mainpage;