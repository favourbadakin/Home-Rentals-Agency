import React from 'react';
import person from "../assets/images/person.png";

const Quotes = () => {
  return (
    <section className="bg-[rgb(255, 195, 133)] grid md:grid-cols-2">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </p>
        <div className="flex items-center gap-x-2">
          <img src={person} alt="person" />
          <div>
            <p className="text-tertiary font-bold text-sm">Harry Wilson</p>
            <p>Property Owner</p>
          </div>
        </div>
      </div>
      <div>
       

        <video controls width="100%">
          <source
            src="https://www.youtube.com/watch?v=zhUCxEr_qSU"
            type="video/mp4"
          />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
    </section>
  );
}

export default Quotes