import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] fixed flex justify-between p-10 items-center bg-secondary-brown">
      <h1 className="text-3xl">YourMusic</h1>
      <ul className="hidden md:flex items-center">
        <h2 className="mx-4">Home</h2>
        <h2 className="mx-4">About</h2>
        <h2 className="mx-4">Reviews</h2>
        <h2 className="mx-4">Account</h2>
        <button className="px-3 py-2 border-4 border-primary-white">
          Order Now
        </button>
      </ul>
      <GiHamburgerMenu
        onClick={handleToggle}
        className={toggle ? "hidden" : "md:hidden cursor-pointer"}
        size={30}
      />
      <AiFillCloseCircle
        onClick={handleToggle}
        className={toggle ? "md:hidden block cursor-pointer" : "hidden"}
      />
    </div>
  );
};

export default Navbar;
