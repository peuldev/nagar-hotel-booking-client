import React from "react";
import {
  FaUser,
  FaRulerCombined,
  FaBinoculars,
  FaChevronRight,
} from "react-icons/fa";

const ShowFeaturedRoom = ({ featuredRoom }) => {
  const { title, images, adults, size, view, price } = featuredRoom;
  return (
    <div className="bg-white rounded border border-border">
      <img src={images} alt="" />
      <h1 className="border-b-2 border-b-border text-xl p-4">{title}</h1>
      <div className="p-4 space-y-5">
        <p className="text-[#656a70] flex items-center text-base">
          <FaUser className="text-blue text-base mr-2" /> Capacity: {adults}{" "}
          Adults
        </p>
        <p className="text-[#656a70] flex items-center text-base">
          <FaRulerCombined className="text-blue text-base mr-2" /> Size: {size}{" "}
        </p>
        <p className="text-[#656a70] flex items-center text-base">
          <FaBinoculars className=" text-blue text-base mr-2" />
          View: {view}{" "}
        </p>
      </div>
      <div className="p-4 flex items-center justify-between text-base">
        <h3 className="bg-blue hover:bg-info p-3 text-white">From {price} / Night</h3>
        <h3 className="flex items-center">
          View Room{" "}
          <span className="ml-2">
            <FaChevronRight />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ShowFeaturedRoom;
