import React, { useState, useEffect, useRef  } from 'react';
import Home from './Home';
import About from './About';
import { AiOutlineVerticalLeft, AiOutlineVerticalRight} from 'react-icons/ai';

const featuredProducts = [
  <Home />,
  <About />,
  <Home />,
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  console.log(slideRef)

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    startSlider();
  })

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }

  const handleOnNextClick = () => {
    const endNext = currentIndex === featuredProducts.length  - 1
    setCurrentIndex(endNext ? 0 : currentIndex + 1);
    slideRef.current.classList.add('fade-anim');
  }

  const handleOnPrevClick = () => {
    const endPrev = currentIndex === 0;
    setCurrentIndex(endPrev ? featuredProducts.length  - 1 : currentIndex - 1);
    slideRef.current.classList.add('fade-anim');
  }

  return (
    <div ref={ slideRef } className="w-full select-none relative">
      <div className="ascpect-w-16 aspect-h-9">
        { featuredProducts[currentIndex] }
      </div>

      <div className="absolute w-full top-1/2 transform translate-y-1/2 px-3 flex justify-between items-center">
        <button type="button" onClick={ handleOnPrevClick }><AiOutlineVerticalRight size={ 30 }  /></button>
        <button type="button" onClick={ handleOnNextClick }><AiOutlineVerticalLeft size={ 30 } /></button>
      </div>
    </div>
  )
}

export default Slider;
