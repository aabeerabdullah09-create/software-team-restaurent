import logo from "../../public/images/logovan.png";

const Logoo = () => {
    return (
        <div className="-mt-5">
            <div className="flex items-center">
                <img alt="Vanilla logo" src={logo}
                    className="w-35 md:w-60 brightness-[80%]"/>
            </div>
        </div>
    );
}

export default Logoo;
