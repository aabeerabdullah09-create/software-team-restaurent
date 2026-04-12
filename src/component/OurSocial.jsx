import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import tikk from "../../public/images/tikvan.png";

const OurSocial = () => {
    return (
        <div className="flex items-center gap-1">
            <a href="https://www.facebook.com/Vanilla.Pal" target="_blank"
                className="text-white p-0.5 hover:text-gray-300">
                <FacebookIcon className="text-white text-[10px]" />
            </a>
            <a href="https://www.instagram.com/vanilla.ps/" target="_blank"
                className="text-white p-0.5 hover:text-gray-300">
                <InstagramIcon className="text-white text-[10px]" />
            </a>
            <a href="https://www.tiktok.com/@vanilla.ps" target="_blank"
                className="p-0.5 hover:opacity-60">
                <Avatar alt="TikTok" src={tikk}
                    className="w-2 h-2"/>
            </a>
        </div>
    );
};

export default OurSocial;
