import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Buttontomenu = () => {
    const navigate = useNavigate();

    return (
        <Box className=" absolute bottom-50 md:bottom-50 left-1/2 -translate-x-1/2 bg-white/15
            px-[10px] py-[10px] rounded-[20px] z-20">
            <Button sx={{ color: "white" }} className="text-sm md:text-base leading-tight whitespace-normal
             md:whitespace-nowrap px-6 text-center"
                onClick={() =>
                    navigate("/Foodpage/333cc771-8218-4d47-b72e-3a6aa2bfb51e")}>
                VIEW FULL MENU
            </Button>
        </Box>
    );
};

export default Buttontomenu;
