import React from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import person from "../assets/images/person.png";
import quotes from "../assets/images/quotes.png";

const Quotes = () => {
  const quoteData = [
    {
      id: 1,
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc velpellentesque est. Curabitur at odio sit amet libero vulputateefficitur ac nec justo. Nulla vitae mauris quam. Nulla quam mass faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus.",
      picture: person,
      name: "Harry Wilson",
      status: "Property Owner",
    },
    {
      id: 2,
      words:
        "Nulla interdum efficitur dui sit amet eleifend. Nullam metus elit, vulputate vel nulla in, molestie ultrices ipsum. Cras interdum at tortor ac vulputate. Proin iaculis diam neque, aliquam suscipit orci dictum hendrerit. Vivamus lobortis felis orci, tempus tincidunt lectus sollicitudin ac. Nulla facilisi.",
      picture: person,
      name: "Desmond Wilfred",
      status: "Tenant",
    },
    {
      id: 3,
      words:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sapien ex, finibus ac rutrum sit amet, dignissim vel augue. In hac habitasse platea dictumst. Mauris ante leo, mattis dapibus lacus eget, pulvinar malesuada odio. Phasellus ornare.",
      picture: person,
      name: "Mason Benjamin",
      status: "Property Owner",
    },
  ];
  const src = "https://www.youtube.com/embed/4Yq5n5DhPLA";
  return (
     <section className="bg-[#FFF3EF] grid grid-cols-1 md:grid-cols-2 relative">
    
      <div className="py-5 px-4 md:px-20 order-2 md:order-1 my-auto">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {quoteData.map((info) => (
            <SwiperSlide>
              <div className="w-72 mx-auto mb-4 md:w-[90%]" key={info.id}>
                <p className="text-sm md:text-base ">{info.words}</p>
                <img
                  src={quotes}
                  className="opacity-30 hidden w-10 absolute top-[4.5rem] left-14"
                  alt="quotes"
                />

                <div className="flex items-center gap-x-2 mt-6 text-xs">
                  <img src={info.picture} alt="person" className="w-12" />

                  <div>
                    <p className="text-tertiary font-bold text-sm capitalize">
                      {info.name}
                    </p>
                    <p>{info.status}</p>
                  </div>
                </div>
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="order-1 md:order-2">
        <iframe
          width="100%"
          height="415"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Quotes;
