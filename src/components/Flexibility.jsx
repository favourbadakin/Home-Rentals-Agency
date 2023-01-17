import React from "react";
import img1 from "../assets/images/unsplash_nEtpvJjnPVo.png";
import img2 from "../assets/images/Image_2.png";
import img3 from "../assets/images/unsplash_uooMllXe6gE.png";
import img4 from "../assets/images/unsplash_XdWkFaHI97c.png";

const Flexibility = () => {
  return (
    <section className="py-5 px-4 md:px-20">
      <div className="flex flex-col items-center gap-x-10 md:gap-x-12 lg:gap-x-16 sm:flex-row">
        <div className="capitalize text-[#FFF] text-xs md:text-base">
          <div className="flex gap-x-4 items-end">
            <div className="relative">
              <img src={img1} alt="room" />
              <p className="absolute top-4 md:left-16 left-[23%] font-semibold">
                Flexible Leases
              </p>
            </div>
            <div className="relative">
              <img src={img2} alt="room" />
              <p className="absolute top-4 left-[5%] md:left-14 text-center font-semibold w-40">
                7-days happinness guaranteed
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 mt-4">
            <div className="relative">
              <img src={img3} alt="room" />
              <p className="absolute top-4 md:left-11 text-center font-semibold w-32">
                monthly house cleaning
              </p>
            </div>
            <div className="relative">
              <img src={img4} alt="room" />
              <p className="absolute top-4 left-[18%] md:left-24 text-center font-semibold w-32">
                Choose your own roommate
              </p>
            </div>
          </div>
        </div>
        <div className="text-primary w-72 md:w-96 text-center sm:text-left">
          <h2 className="font-bold text-lg md:font-extrabold mt-5 lg:text-3xl mb-2 sm:mt-0">
            Flexibility and options to suit your lifestyle.
          </h2>
          <p className="text-sm md:text-base">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <button className="btn mt-4">Search Rooms</button>
        </div>
      </div>
    </section>
  );
};

export default Flexibility;
