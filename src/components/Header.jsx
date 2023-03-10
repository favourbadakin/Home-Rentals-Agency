import React, { useState } from "react";
import { motion } from 'framer-motion'
import logo from "../assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
//import '../navbar.css';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";



const Header = () => {

  const variants = {
    open: {opacity: 1, x: 0},
    closed: { opacity: 0, x: '-100%'}
  }
 
  const [isOpen, setIsOpen] = useState(false)
 


  const isActive = "pb-[1.09rem] border-b-[2px]";
  const isNotActive = 'pb-[1.09rem] hover:border-b-[2px] transition';

  return (
    <header className="bg-hero-image bg-no-repeat bg-cover h-screen pb-14 sm:h-auto lg:h-screen">
      <nav className="flex space-x-72 items-end py-3 border-b border-[rgba(255,255,255,.5)] w-4/5 mx-auto md:py-4">
        <div>
          <img src={logo} alt="logo" className="w-32 h-auto lg:w-full" />
        </div>
        <ul className="dmsans text-[#FFF] font-medium space-x-12 hidden items-center md:flex">
          <li>
            <a className={isActive} href="/#">
              Home
            </a>
          </li>
          <li>
            <a className={isNotActive} href="/#">
              Landlord
            </a>
          </li>
          <li>
            <a className={isNotActive} href="/#">
              Tenants
            </a>
          </li>
          <li>
            <a className={isNotActive} href="/#">
              Contact Us
            </a>
          </li>
        </ul>
        <motion.div
          className="md:hidden"
          variants={variants}
          animate={isOpen ? "open" : "closed"}
        >
          <button>
            <AiOutlineMenu onClick={() => setIsOpen((isOpen) => !isOpen)} />
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </button>
        </motion.div>
      </nav>
      {/* <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between mx-32 h-full my-auto lg:overflow-x-hidden"> */}
      <div className="grid sm:grid-cols-2 items-center place-items-center pt-14 mt-12 sm:mt-0 md:mx-32 md:h-full my-auto md:gap-x-4">
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-bold text-[#FFF] text-center sm:text-left w-60 text-lg mb-12 leading-6 sm:mb-0 md:text-xl lg:text-2xl xl:text-4xl lg:w-[26rem] tracking-wide lg:leading-[45px] capitalize">
            The most affordable place to stay in the san franciso bay area
          </h2>
        </motion.div>
        <motion.div
          className="w-80 h-80 md:w-72 lg:w-96 md:h-auto"
          initial={{ opacity: 0, x: "100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-64 mb-3">
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
              placeholder={<p>Loading...</p>}
              style={{
                height: "100%",
                width: "100%",
                zIndex: "10",
                borderRadius: "10px",
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>

          <div className="bg-[#FFF] p-3 md:p-4 rounded-xl">
            <form className="flex">
              <select
                className="border bg-[#FFF] bg-clip-padding cursor-pointer focus:ring-0 rounded-bl rounded-tl text-[#737373] text-sm p-2 focus:outline-none border-[#E6E6E6] w-4/12"
                id="type"
                name="type"
              >
                <option>All Type</option>
                <option value="private">Private Room</option>
                <option value="compact">Compact Room</option>
                <option value="family">Family Room</option>
              </select>
              <select
                className="border text-[#737373] bg-[#FFF] bg-clip-padding cursor-pointer focus:ring-0 text-sm p-2 focus:outline-none border-[#E6E6E6] w-6/12 rounded-none"
                id="type"
                name="type"
              >
                <option>Neighborhood</option>
                <option value="private">Private Room</option>
                <option value="compact">Compact Room</option>
                <option value="family">Family Room</option>
              </select>
              <button className="w-2/12">
                <HiOutlineSearch
                  style={{
                    backgroundColor: "#23A6F0",
                    color: "E6E6E6",
                    padding: "12px",
                    fontSize: "48px",
                    borderBottomRightRadius: "0.25rem",
                    borderTopRightRadius: "0.25rem",
                  }}
                />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
