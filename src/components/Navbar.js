import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar({ history }) {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="in_front fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#74949177] text-gray-200">
      <div>
        <h4 className="text-2xl">João Otávio Gomes Hugill</h4>
      </div>

      {/* MENU */}
      <div className="hidden md:flex">
        <ul className="flex">
          <li onClick={ () => history.push('/front_end_portfolio') }>Home</li>
          <li onClick={ () => history.push('/work') }>Projetos</li>
          <li onClick={ () => history.push('/contact') }>Contato</li>
        </ul>
      </div>

      {/* HAMBURGUER */}
      <div className="md:hidden z-10" onClick={ handleClick }>{ !nav ? <FaBars /> : <FaTimes /> }</div>

      {/* MOBILE MENU */}
      <ul className={ !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#749491] flex flex-col justify-center items-center"}>
          <li className='py-6 text-4xl in_front' onClick={ () => history.push('/front_end_portfolio') }>Home</li>
          <li className='py-6 text-4xl in_front' onClick={ () => history.push('/work') }>Projetos</li>
          <li className='py-6 text-4xl in_front' onClick={ () => history.push('/contact') }>Contato</li>
      </ul>
    </div>
  )
}

export default Navbar