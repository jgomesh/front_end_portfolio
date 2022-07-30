import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import ASTRONAUT from '../assets/astronault.png';

function Home() {
  return (
      <div className="w-full h-screen py-[350px]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-6 gap-4 on-top">
          <p className="text-[#4CAF50] z-0">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">João Otávio Gomes Hugill</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0">I'm a Full Stack Developer</h2>
          <p className="text-[#8893b0] py-4 max-w-[700px]">We will be starting off in VS code creating our React App, installing and configuring Tailwind CSS and then build out each component in the portfolio. We will be using getform.io for a functional form to submit messages with automation! How cool is that!?  Hope you guys like it!</p>
          <div>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
              <button type="button" className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4dc251] hover:border-[#4CAF50] transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-300"> Sobre mim!
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="astronault">
          <img src={ ASTRONAUT } alt="astrounault" />
        </div>
              {/* SOCIAL ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 icons-my">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 icons-my">
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

export default Home;