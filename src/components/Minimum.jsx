import React from 'react';
import room from "../assets/images/unsplash_oGmf8o53LeE.png";
import { TbPlant } from 'react-icons/tb';
import { ImStack } from 'react-icons/im';
import {
  RiMoneyDollarCircleLine,
  RiShieldStarLine,
  RiCommunityLine,
  RiEye2Line,
} from "react-icons/ri";

const Minimum = () => {

  const iconStyle = {
    border: "1px solid #FFFFFF",
    padding: "8px",
    fontSize: "2.8rem",
    boxShadow: "0px 12px 19px rgba(0, 0, 0, 0.15)",
    borderRadius: "7px",
  };
  return (
    <section className="text-primary py-6 px-4 md:px-20">
      <div>
        <h2 className="capitalize font-extrabold text-center sm:text-left text-lg md:text-xl xl:text-2xl">
          minimum living cost takes care of everything
        </h2>
        {/* Horizontal lines */}
        <hr
          className="w-56 hidden sm:block"
          style={{ border: "1px solid #F4511E" }}
        />
        <hr
          className="w-32 mt-2 mx-auto sm:hidden"
          style={{ border: "1px solid #F4511E", borderRadius: "50px" }}
        />
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <div className="md:-ml-11">
          <img src={room} alt="room" />
        </div>
        <div className="font-semibold text-xs md:text-base capitalize md:grid grid-cols-3 gap-y-20 md:text-left">
          <div className="flex mt-4 md:mt-0 md:flex-col items-center md:items-start space-x-6 md:space-x-0">
            <i className="icn md:mb-2">
              <RiMoneyDollarCircleLine style={iconStyle} />
            </i>
            <p className="md:w-28">Pay as little as possible</p>
          </div>
          <div className="flex md:flex-col mt-4 md:mt-0 items-center md:items-start space-x-6 md:space-x-0">
            <i className="icn md:mb-2">
              <RiCommunityLine style={iconStyle} />
            </i>
            <p className="md:w-32">enjoy wisdom of community!</p>
          </div>
          <div className="flex md:flex-col mt-4 md:mt-0 items-center md:items-start space-x-6 md:space-x-0">
            <i className="icn md:mb-2">
              <ImStack style={iconStyle} />
            </i>
            <p className="md:w-[11.5rem]">
              Let somebody else take care of Landlord!
            </p>
          </div>
          <div className="flex md:flex-col mt-4 md:mt-0 items-center md:items-start space-x-6 md:space-x-0">
            <i className="icn md:mb-2">
              <TbPlant style={iconStyle} />
            </i>
            <p className="md:w-32">Enjoy peaceful Environment!</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 md:flex-col md:items-start space-x-6 md:space-x-0">
            <i className="icn md:mb-2">
              <RiShieldStarLine style={iconStyle} />
            </i>
            <p className="md:w-28">
              Stay Safe! <br className="hidden md:block" />
              Save Money!
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 md:flex-col md:items-start space-x-6 md:space-x-0">
            <i className="icn md:mb-2">
              <RiEye2Line style={iconStyle} />
            </i>
            <p className="md:w-28">pay for what you use!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Minimum