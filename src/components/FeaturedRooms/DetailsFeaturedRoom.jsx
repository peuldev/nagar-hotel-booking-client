import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBed, FaRulerCombined, FaBinoculars } from "react-icons/fa";

const DetailsFeaturedRoom = () => {
  const featuredRooms = useLoaderData();
  const { title, images, adults, size, view, price, _id } = featuredRooms;
  return (
    <div className="max-w-7xl mx-auto font-secondary">
      <div className="flex justify-center">
        <div className="mx-2">
          <h1 className="text-center text-2xl pt-5 pb-2">{title}</h1>
          <div className="flex justify-center mb-5">
            <p className="flex items-center mr-5">
              {" "}
              <FaBed className="text-blue text-base mr-2" />
              Sleeps: {adults} Adults
            </p>
            <p className="flex items-center mr-5">
              {" "}
              <FaRulerCombined className="text-blue text-base mr-2" />
              {size}
            </p>
            <p className="flex items-center mr-5">
              {" "}
              <FaBinoculars className="text-blue text-base mr-2" />
              City: {view}
            </p>
          </div>
          <img src={images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsFeaturedRoom;
