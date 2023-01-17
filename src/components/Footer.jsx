import React from 'react';
import logo from "../assets/images/logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoMdCall, IoLogoTwitter, IoLogoRss } from "react-icons/io";
import { BsPrinterFill, BsPinterest } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-6 pb-18 text-[#0A142F] text-sm px-4 lg:text-base md:px-20">
      <div className="flex flex-col assistant justify-between lg:w-3/4 mx-auto md:flex-row">
        <div className="bg-[#000] opacity-30 w-48 mx-auto p-5 rounded-xl">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="mt-8 md:mt-0">
            <div className="flex justify-center  tems-center gap-x-3 md:justify-start">
              <i className="text-tertiary text-lg">
                <MdLocationPin />
              </i>
              <span>
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </span>
            </div>
            <div className="flex justify-center gap-x-8 md:gap-x-0 md:justify-between mt-2 mb-4">
              <div>
                <div className="flex items-center gap-x-3">
                  <i className="text-tertiary text-lg">
                    <IoMdCall />
                  </i>
                  <span>(123) 456-7890</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-x-3">
                  <i className="text-tertiary text-lg">
                    <BsPrinterFill />
                  </i>
                  <span>(123) 456-7890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-x-5 sm:flex-row md:justify-start">
            <p className="opacity-50 text-sm my-3 sm:my-0">Social Media</p>
            <div className="flex gap-x-5">
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#3B5998] transition">
                  <AiFillFacebook />
                </i>
              </a>
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#1DA1F2] transition">
                  <IoLogoTwitter />
                </i>
              </a>
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#0077B5] transition">
                  <FaLinkedinIn />
                </i>
              </a>
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#FF0000] transition">
                  <AiFillYoutube />
                </i>
              </a>
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#DD2A7B] transition">
                  <AiFillInstagram />
                </i>
              </a>
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#DB4A39] transition">
                  <AiOutlineGooglePlus />
                </i>
              </a>
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#E60023] transition">
                  <BsPinterest />
                </i>
              </a>
              <a href="/#">
                <i className="text-tertiary text-lg hover:text-[#EE802F] transition">
                  <IoLogoRss />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-20 flex flex-col text-center text-xs sm:text-sm justify-between w-4/5 mx-auto lg:flex-row">
        <ul className="uppercase flex justify-center flex-col gap-x-4 gap-y-2 sm:flex-row lg:justify-start">
          <li className="hover:opacity-50 transition">
            <a href="">about us</a>
          </li>
          <li className="hover:opacity-50 transition">
            <a href="">contact us</a>
          </li>
          <li className="hover:opacity-50 transition">
            <a href="">help</a>
          </li>
          <li className="hover:opacity-50 transition">
            <a href="">privacy policy</a>
          </li>
          <li className="hover:opacity-50 transition">
            <a href="">disclaimer</a>
          </li>
        </ul>
        <p className="opacity-50 mt-4 lg:mt-0">
          Copyright © 2023 Minimumlivingcost. All rights reserved
        </p>
      </div>
      <p className="text-center poppins my-4">
        Developed with ❤️ by <span className="border-b p-[0.2]">
          <a href='https://twitter.com/codewithfav'> Favour</a>
        </span>
        ⚡
      </p>
    </footer>
  );
}

export default Footer