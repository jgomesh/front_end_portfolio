import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#18283d] text-gray-200">
      <div>
        <h4 className="text-2xl">João Otávio Gomes Hugill</h4>
      </div>

      {/* MENU */}
      <div className="hidden md:flex">
        <ul className="flex">
          <li>Home</li>
          <li>My Work</li>
          <li>Skills</li>
        </ul>
      </div>

      {/* HAMBURGUER */}
      <div className="md:hidden z-10" onClick={ handleClick }>{ !nav ? <FaBars /> : <FaTimes /> }</div>

      {/* MOBILE MENU */}
      <ul className={ !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0A129F] flex flex-col justify-center items-center"}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>My Work</li>
          <li className='py-6 text-4xl'>Skills</li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Linkedin <FaLinkedin size={ 30 }/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Github <FaGithub size={ 30 }/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Email <HiOutlineMail size={ 30 }/>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Resume <BsFillPersonLinesFill size={ 30 }/>
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar