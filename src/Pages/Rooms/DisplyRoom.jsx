import React from "react";
import { FaUser, FaRulerCombined, FaEuroSign } from "react-icons/fa";
import { FaRegBookmark, FaLocationDot } from "react-icons/fa6";

import { Link } from "react-router-dom";

const DisplyRoom = ({ room }) => {
  const { title, image, adults, size, price, _id, location } = room;
  return (
    <div className="bg-white rounded border border-border">
      <div className="flex justify-center lg:mt-4">
        <img className="rounded" src={image} alt="" />
      </div>
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
          <FaLocationDot className="text-blue text-base mr-2" /> Location:{" "}
          {location}{" "}
        </p>
      </div>
      <div className="p-4 flex items-center justify-between text-base">
        <p className="text-[#656a70] flex items-center text-base">
          <FaEuroSign className="text-base mr-2 text-[#64bc5f]" />
          <span className="text-[#64bc5f] font-semibold">{price}</span>
          <span className="ms-2 text-[#64688c]">per night</span>
        </p>
        <Link to="/rooms">
          <div className="bg-blue flex items-center hover:bg-info p-3 text-white rounded-full">
            <FaRegBookmark />
            <span className="ms-2">Book Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DisplyRoom;
