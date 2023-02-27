import React from "react";

const Contact = () => {
  return (
    <div className="text-primary-white h-full w-full bg-primary-black">
      <div className=" flex flex-col sm:flex-row justify-center items-center py-10 sm:p-20">
        <h2>STAY CONNECTED</h2>
        <input
          placeholder="Email..."
          className="sm:mx-10 sm:my-0 my-5 p-2  w-[50%] border-4 border-secondary-brown"
        />
        <button className="px-3 py-2 border-4 border-secondary-brown">
          Subscribe
        </button>
      </div>
      <div className="flex flex-col sm:flex-row text-center sm:text-left justify-around items-center p-20">
        <div>
          <h2>HOME</h2>
          <h2>BENEFITS</h2>
          <h2>REVIEWS</h2>
        </div>
        <div className="my-10 sm:my-0">
          <h2>SHIPPING & RETURNS</h2>
          <h2>STORE POLICY</h2>
          <h2>PAYMENT METHODS</h2>
          <h2>FAQs</h2>
        </div>
        <div>
          <h2>INSTAGRAM</h2>
          <h2>YOUTUBE</h2>
          <h2>TWITTER</h2>
        </div>
      </div>
      <h1 className="text-center pb-10 w-[90%] sm:w-full">
        ©2020 by YourMusic. Powered and secured by YourMusic
      </h1>
    </div>
  );
};

export default Contact;
