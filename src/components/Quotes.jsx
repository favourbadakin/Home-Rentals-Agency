import React from "react";
import person from "../assets/images/person.png";
import quotes from '../assets/images/quotes.png'

const Quotes = () => {
  //const src = "https://www.youtube.com/embed/8EbKJeQdpLI";
  const src = 'https://www.youtube.com/embed/4Yq5n5DhPLA'
  return (
    <section className="bg-[#FFF3EF] grid md:grid-cols-2 relative">
      <div className="py-5 px-4 md:px-20 order-2 md:order-1 my-auto">
        <div className="w-72">
          <p className="text-sm md:text-base mx-auto md:w-[26rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <img
            src={quotes}
            className="opacity-30 w-10 absolute top-[4.5rem] left-14"
            alt="quotes"
          />
        </div>
        <div className="flex items-center gap-x-2 mt-6 text-xs">
          <img src={person} alt="person" className="w-12" />
          <div>
            <p className="text-tertiary font-bold text-sm">Harry Wilson</p>
            <p>Property Owner</p>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <iframe
          width="100%"
          height="415"
          src={src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Quotes;
