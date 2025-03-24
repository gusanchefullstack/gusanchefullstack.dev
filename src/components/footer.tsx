import { FaFreeCodeCamp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";

export const Footer = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, name: "LinkedIn" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaTwitter />, name: "Twitter" },
        { icon: <FaFreeCodeCamp />, name: "FreeCodeCamp" },
        { icon: <FaHashnode />, name: "Hashnode" },
        { icon: <HiMailOpen />, name: "Email" },
    ];

    return (
        <ul className="text-blue-300 flex gap-1 flex-nowrap justify-center items-center text-2xl">
            {socialLinks.map((link, index) => (
                <div key={index} className=" border-blue-300 border-1 p-3 hover:cursor-pointer hover:text-yellow-100">
                    <li>{link.icon}</li>
                </div>
            ))}
        </ul>
    );
};
