import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
  return (
      <div className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">João Otávio Gomes Hugill</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0">I'm a Full Stack Developer</h2>
          <p className="text-[#8893b0] py-4 max-w-[700px]">We will be starting off in VS code creating our React App, installing and configuring Tailwind CSS and then build out each component in the portfolio. We will be using getform.io for a functional form to submit messages with automation! How cool is that!?  Hope you guys like it!</p>
        </div>
        <div>
          <button type="button" className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"> My Work 
            <span className="hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
  )
}

export default Home;