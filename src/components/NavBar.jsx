import logo from "../assets/RDlogo.jpg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const NavBar = () => {
  return (
   <nav className= 'mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-3 w-10' src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/rashmika-dilmin-a674a1265/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Rash499"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
        <FaGithub />
        </a>

    </div>
   </nav>
  )
}

export default NavBar