import React from 'react'
import logo from "../assets/RDlogo.jpg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

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
          aria-label="LinkedIn"
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

        <a
          href="https://www.instagram.com/rashmika_dilmith/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <FaInstagram />
        </a>
        
        <a
          href=""
          //target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <FaXTwitter />
        </a>
        
    </div>
   </nav>
  )
}

export default NavBar