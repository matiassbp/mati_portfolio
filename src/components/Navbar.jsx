import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { CONTACT } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="" src="https://placehold.co/100x100/transparent/fff.png?text=MB" alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer hover:text-gray-500 transition" />
          </a>
          <a href="https://www.hackerrank.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaCode className="cursor-pointer hover:text-green-600 transition" />
          </a>
          <a href={`mailto:${CONTACT.email}`} target="_blank" rel="noopener noreferrer">
            <IoMdMail className="cursor-pointer hover:text-gray-500 transition" />
          </a>      
        </div>
    </nav>
  )
}

export default Navbar
