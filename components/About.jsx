import React from "react";
import { GrBluetooth } from "react-icons/gr";
import { BsSoundwave, BsLightningChargeFill } from "react-icons/bs";
import { FaHeadphones, FaBluetoothB } from "react-icons/fa";

const About = () => {
  return (
    <div className="text-primary-white p-10 bg-about md:flex grid grid-cols-1 sm:grid-cols-2 justify-around items-center bg-fixed bg-cover h-full w-full">
      <div className="p-5 md:p-20">
        <BsSoundwave size={30} />
        <h2 className="text-2xl my-5">High Quality Sound</h2>
        <p>
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
      </div>
      <div className="p-5 md:p-20 flex flex-col justify-between border-l-2 ">
        <div>
          <FaBluetoothB size={30} />
          <h2 className="text-2xl my-5">Wireless Connectivity</h2>
          <p>
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        <div className="h-[200px] hidden md:block" />
      </div>
      <div className="p-5 md:p-20 md:border-l-2">
        <BsLightningChargeFill size={30} />
        <h2 className="text-2xl my-5">Higher Battery Life</h2>
        <p>
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
      </div>
      <div className="p-5 md:p-20 flex flex-col border-l-2">
        <div>
          <FaHeadphones size={30} />
          <h2 className="text-2xl my-5">Futuristic Design</h2>
          <p>
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </p>
        </div>
        <div className="h-[200px] hidden md:block" />
      </div>
    </div>
  );
};

export default About;
