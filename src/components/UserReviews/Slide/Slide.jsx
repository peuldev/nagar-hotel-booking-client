import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import gest1 from "../../../assets/Guests/gest-t1.jpg";
import gest2 from "../../../assets/Guests/gest-t2.jpg";
import gest3 from "../../../assets/Guests/gest-t3.jpg";
import gest4 from "../../../assets/Guests/gest-t4.jpg";

// import required modules
import { Pagination } from "swiper/modules";
export const Slide = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center">
              <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
                Reviews
              </h1>
            </div>
            <div>
              <p>
                Sed sollicitudin, sem id imperdiet semper, enim ante tempor
                sapien, a commodo nisl dolor at elit. Aliquam suscipit egestas
                velit at elementum. Nulla sit amet ligula at dolor rhoncus
                rhoncus. Aenean molestie est tortor. Mauris dictum magna sit
                amet velit ornare.
              </p>
            </div>
            <div className="w-20 mx-auto py-5">
              <img className="rounded-full" src={gest1} alt="" />
            </div>
            <div>
              <p className="py-5">
                Maria Clarke - <span>Standard Room</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
