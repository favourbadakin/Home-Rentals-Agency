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
              
            
                <div className="grid grid-cols-3 place-content-center items-center font-bold">
                  <div className="flex pl-8 items-center border-t py-3 gap-x-1 text-[#E4E4E4]">
                    <i className="text-[#000]">
                      <MdOutlineBed />
                    </i>
                    <span className="text-[#000]">{bed}</span>
                  </div>
                  <div className="flex items-center border-x border-t text-[#E4E4E4] px-8 py-3 gap-x-1">
                    <i className="text-[#000]">
                      <GiBathtub />
                    </i>
                    <span className="text-[#000]">{shower}</span>
                  </div>
                  <div className="flex pl-8 items-center border-t py-3  text-[#E4E4E4]">
                    
                      <i className="text-[#000]">
                        <CiHashtag />
                      </i>
                      <span className="text-[#000]">{hashtag}</span>
                    
                  </div>
                </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards