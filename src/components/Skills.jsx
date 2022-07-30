import React from 'react';
import HTML from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import CSS from '../assets/css.png';
import GitHub from '../assets/github.png';
import TailWind from '../assets/tailwind.png';

function Skills() {
  return (
    <>
      <div className="w-full bg-[#00968786] h-[200px] "></div>
      <div name="skills" className="w-full h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-6">
          <div className="py-6">
            <p className="text-4xl font-bold inline border-b-4 border-[#4CAF50] py-6">Experience</p>
            <p>These are the technologies I've worked with:</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3  gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ HTML } className="w-20 mx-auto" alt="html icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ CSS } className="w-20 mx-auto" alt="html icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ Javascript } className="w-20 mx-auto" alt="html icon" />
              <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ ReactImg } className="w-20 mx-auto" alt="html icon" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ GitHub } className="w-20 mx-auto" alt="html icon" />
              <p className="my-4">GitHub</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ TailWind } className="w-20 mx-auto" alt="html icon" />
              <p className="my-4">TailWind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;
