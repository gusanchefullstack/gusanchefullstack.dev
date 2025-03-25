import { FaFreeCodeCamp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";

export const Footer = () => {
    const socialLinks = [
        { icon: <FaLinkedin />, name: "LinkedIn", url:"https://www.linkedin.com/in/gusanchefullstackdev/" },
        { icon: <FaGithub />, name: "GitHub", url:"https://github.com/gusanchefullstack" },
        { icon: <FaTwitter />, name: "Twitter", url:"https://x.com/gusanchedev" },
        { icon: <FaFreeCodeCamp />, name: "FreeCodeCamp", url:"https://www.freecodecamp.org/gusanchedev" },
        { icon: <FaHashnode />, name: "Hashnode", url:"https://hashnode.com/@gusanchedev" },
        { icon: <HiMailOpen />, name: "Email", url:"mailto:gustavo.sanchez@gusanchefullstack.dev" },
    ];

    return (
        <ul className="text-blue-300 flex gap-3 flex-nowrap justify-center items-center text-2xl p-8">
            {socialLinks.map((link, index) => (
                <div key={index} className=" border-blue-300 border-1 p-3 hover:cursor-pointer hover:text-yellow-100">
                    <a href={link.url} target="_blank" rel="noreferrer"><li>{link.icon}</li></a>
                </div>
            ))}
        </ul>
    );
};
