import React from 'react';
import { MdOutlineBed } from 'react-icons/md';
import { GiBathtub } from 'react-icons/gi';
import { CiHashtag } from 'react-icons/ci';

const Cards = ({ img, roomType, address, price, hashtag, shower, bed, }) => {

 
 
  return (
    <section>
      <div>
        <div className="w-72 md:w-76">
          <img src={img} alt="room" />
          <div
            className="bg-[#FFFFFF] rounded-b-3xl border-x border-b text-[#979797]"
            style={{
              boxShadow: "0px 34.0693px 36.1986px rgba(0, 0, 0, 0.133714)",
            }}
          >
            <div className="capitalize pl-6 py-2">
              <h4 className="font-bold text-sm md:text-base w-60 text-[#000]">
                {address}
              </h4>
              <h6 className="text-[#818181] mt-3 font-normal text-xs">
                {roomType}
              </h6>
              <p className="text-[#F4511E] font-bold">${price}/Month</p>
            </div>
            <div className="py-3 h-14">
              <hr className="text-[#E4E4E4]" />
              <div className="flex items-center justify-center gap-x-7 font-bold">
                <div className="flex items-center gap-x-1 text-[#000]">
                  <i>
                    <MdOutlineBed />
                  </i>
                  <span>{bed}</span>
                </div>
                <div className="flex items-center border-x text-[#E4E4E4] px-11 gap-x-1">
                  <i className="text-[#000]">
                    <GiBathtub />
                  </i>
                  <span className="text-[#000]">{shower}</span>
                </div>
                <div className="flex items-center gap-x-1 text-[#000]">
                  <i>
                    <CiHashtag />
                  </i>
                  <span>{hashtag}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards