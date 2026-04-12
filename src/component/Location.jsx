import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";

const LocationButton = () => {
    const [openMap, setOpenMap] = useState(false);
    if (openMap) {
        window.open("https://maps.app.goo.gl/UqmJU52jKnh3m8o8A", "_blank");
        setOpenMap(false);}
    return (
        <IconButton onClick={() => setOpenMap(true)}
       className="flex items-center gap-1" sx={{ color: "white" }}>
            <LocationOnIcon sx={{ fontSize: 18 }} />
            <span className="text-white text-[14px]">Location</span>
        </IconButton>
    );
};

export default LocationButton;
