import React from "react";
import microsoft from "../public/assets/6.jpg";
import Image from "next/image";

const Order = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-around items-center md:p-20 p-5 bg-primary-brown">
      <div className="flex flex-col justify-around items-center bg-primary-brown p-10">
        <h1 className="text-4xl p-5 text-primary-white">
          MUSIC Like YOU Have NEVER Heard Before.
        </h1>
        <p className="text-2xl bg-primary-brown text-primary-white p-5 text-center my-10">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
        <button className="text-primary-white text-xl px-3 py-2 border-4 border-primary-white">
          Order now
        </button>
      </div>
      <Image
        src={microsoft}
        height={1000}
        width={1000}
        alt="image"
        className="sm:h-[600px] sm:w-[600px] h-[50%] w-[50%] object-cover "
      />
    </div>
  );
};

export default Order;
