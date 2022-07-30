import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

function About({ history }) {
  return (
      <div name="about" className="w-full h-screen bg-[#55aca3] text-gray-300 z-0">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#4CAF50]">About</p>

            </div>
            <div></div>
            </div>
            <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-8">
              <div className="sm:text-right text-4xl font-bold ">
                <p>Hi. Im João, have a look around!</p>
              </div>
              <div>
                <p>
                  Olá, sou um Desenvolvedor Web Front End e estudante de Back End apaixonado em fazer minhas aplicações funcionarem da maneira correta.
                  Estou em busca da minha primeira oportunidade no mercado de tecnologia, em um ambiente diverso e com oportunidade de crescimento.
                </p>
              </div>
            </div>
        <div>
          <button onClick={ () => history.push('/work') } type="button" className="text-white group border-2 px-6 py-3 my-6 flex items-center hover:bg-[#4dc251] hover:border-[#4CAF50] transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 duration-300">
            Meus projetoss
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
        </div>
      </div>
  )
}

export default About;