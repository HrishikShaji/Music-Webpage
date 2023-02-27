import React from "react";
import { useState } from "react";
import { Slides } from "./Slides";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(Slides.length - 1);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + Slides.length) % Slides.length;
    setCurrentIndex(newIndex);
    setPrevIndex((newIndex - 1 + Slides.length) % Slides.length);
    setNextIndex(currentIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % Slides.length;
    setCurrentIndex(newIndex);
    setPrevIndex(currentIndex);
    setNextIndex((newIndex + 1) % Slides.length);
  };

  return (
    <div className="p-10 flex justify-around items-center w-full h-full bg-secondary-brown">
      <AiOutlineCaretLeft
        onClick={prevSlide}
        size={70}
        className=" rounded-full cursor-pointer"
      />

      <div className="md:h-[400px] p-2 h-[300px] w-[80%] bg-primary-white mx-5 flex flex-col  items-center justify-center">
        <h1 className="text-xl my-2">{Slides[currentIndex].name}</h1>
        <p className="text-center md:w-[50%]">{Slides[currentIndex].content}</p>
      </div>

      <AiOutlineCaretRight
        onClick={nextSlide}
        size={70}
        className=" rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Slider2;
