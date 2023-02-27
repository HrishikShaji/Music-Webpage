import React from "react";
import apple from "../public/assets/apple.png";
import google from "../public/assets/google.png";
import microsoft from "../public/assets/microsoft.png";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="h-full w-full bg-secondary-brown flex flex-col justify-around p-10">
      <h1 className="text-4xl text-primary-brown">AS FEATURED ON </h1>
      <div className="flex justify-around items-center my-10">
        <Image
          src={apple}
          height={1000}
          width={1000}
          alt="image"
          className="sm:h-[100px] sm:w-[100px] h-[50px] w-[50px] object-cover "
        />
        <Image
          src={microsoft}
          height={1000}
          width={1000}
          alt="image"
          className="sm:h-[100px] sm:w-[100px] h-[50px] w-[50px] object-cover "
        />
        <Image
          src={google}
          height={1000}
          width={1000}
          alt="image"
          className="sm:h-[100px] sm:w-[100px] h-[50px] w-[50px] object-cover "
        />
      </div>
    </div>
  );
};

export default Feature;
