import bgimage from "../../public/images/vannnnnn.png";

const Restphoto = () => {
    return (
        <img src={bgimage} alt="background"
            className="absolute top-0 left-0 w-full h-screen md:h-full
            object-cover -z-10 opacity-40
            mask-x-from-85% mask-x-to-90%
            mask-t-from-80%
            mask-b-from-95% mask-b-to-100% "/>
    );
};

export default Restphoto;

