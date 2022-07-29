import React from "react";

function About() {
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
        </div>
      </div>
  )
}

export default About;