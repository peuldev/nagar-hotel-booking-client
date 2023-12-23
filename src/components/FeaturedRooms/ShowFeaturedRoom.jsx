import React from "react";
import { FaUser, FaRulerCombined, FaBinoculars } from "react-icons/fa";

const ShowFeaturedRoom = ({ featuredRoom }) => {
  const { title, images, adults, size, view, price } = featuredRoom;
  return (
    <div className="bg-white rounded border border-border">
      <img src={images} alt="" />
      <h1 className="border-b-2 border-b-border text-xl p-4">{title}</h1>
      <div className="p-4 space-y-5">
        <p className="text-[#656a70] flex items-center text-base">
          <FaUser className="text-[#b99470] text-base mr-2" /> Capacity:
        </p>
        <p className="text-[#656a70] flex items-center text-base">
          <FaRulerCombined className="text-[#b99470] text-base mr-2" /> Size:
        </p>
        <p className="text-[#656a70] flex items-center text-base">
          <FaBinoculars className="text-[#b99470] text-base mr-2" />
          View:
        </p>
      </div>
    </div>
  );
};

export default ShowFeaturedRoom;
