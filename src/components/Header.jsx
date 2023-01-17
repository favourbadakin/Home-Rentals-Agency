import React from "react";
import logo from "../assets/images/logo.png";
import maps from "../assets/images/maps.png";

const Header = () => {
  return (
    <header className="bg-hero-image bg-no-repeat bg-cover h-screen">
      <nav className="flex space-x-72 items-end py-3 border-b border-[rgba(255,255,255,.5)] w-4/5 mx-auto md:py-4">
        <div>
          <img src={logo} alt="logo" className="w-32 h-auto md:w-full" />
        </div>
        <ul className="dmsans text-[#FFF] font-medium space-x-12 hidden items-center lg:flex">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Landlord</a>
          </li>
          <li>
            <a href="/#">Tenants</a>
          </li>
          <li>
            <a href="/#">Contact Us</a>
          </li>
        </ul>
        <div className="hidden text-[#FFF]">
          <ul>
            <li>Home</li>
            <li>Landlord</li>
            <li>Tenants</li>
          </ul>
        </div>
      </nav>
      {/* <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between mx-32 h-full my-auto lg:overflow-x-hidden"> */}
      <div className="grid sm:grid-cols-2 items-center place-items-center mt-12 sm:mt-0 md:mx-32 md:h-full my-auto md:gap-x-4">
        <div>
          <h2 className="font-bold text-[#FFF] text-center sm:text-left w-60 text-lg mb-12 leading-6 sm:mb-0 md:text-xl lg:text-2xl xl:text-4xl lg:w-[26rem] tracking-wide lg:leading-[45px] capitalize">
            The most affordable place to stay in the san franciso bay area
          </h2>
        </div>
        <div className="w-80 h-80 md:w-72 lg:w-96 md:h-auto">
          <img src={maps} alt="map" />
        </div>
      </div>
    </header>
  );
};

export default Header;
