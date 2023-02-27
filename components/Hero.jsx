import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero bg-fixed bg-cover h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-8xl text-primary-white">YourMusic</h1>
      <p className="w-[70%] text-center text-xl md:text-2xl text-primary-white mt-10">
        'Lorem ipsum dolor sit amet, . Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur '
      </p>
      <button className="text-xl text-primary-white mt-10 cursor-pointer border-4 border-primary-white px-3 py-2">
        Order now
      </button>
    </div>
  );
};

export default Hero;
