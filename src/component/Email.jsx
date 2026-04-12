import { useState } from "react";
import { IconButton } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

const Email = () => {
    const [openEmail, setOpenEmail] = useState(false);
    if (openEmail) {
        window.open('mailto:info@vanilla.ps', '_blank');
        setOpenEmail(false);
    }
    return (
        <IconButton onClick={() => setOpenEmail(true)}
            className="flex items-center gap-1">
            <MailIcon className="text-white text-[2px]" />
            <span className="text-white text-[13px]">Email</span>
        </IconButton>
    );
};

export default Email;
