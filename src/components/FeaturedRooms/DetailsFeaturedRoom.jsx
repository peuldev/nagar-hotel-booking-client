import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBed, FaRulerCombined, FaBinoculars } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const DetailsFeaturedRoom = () => {
  const featuredRooms = useLoaderData();
  const { title, image, adults, size, view, price, _id, description } =
    featuredRooms;
  return (
    <div className="max-w-7xl mx-auto font-secondary">
      <Helmet>
        <title>DetailsFeaturedRoom | Nagar</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="mx-2">
          <h1 className="text-center text-2xl pt-5 pb-2">{title}</h1>
          <div className="lg:flex md:flex flex-row justify-center mb-5">
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
          <img src={image} alt="" />
        </div>
      </div>
      {/* ditails  */}
      <div>
        <div className="flex justify-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
            Room Description
          </h1>
        </div>
        <div className="mx-2">
          <p>{description}</p>
        </div>
        <div className="flex justify-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
            Facilities
          </h1>
        </div>
        {/* table use  */}
        <div className="max-w-2xl mx-auto pb-20">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>High speed in-room wifi</td>
                  <td>Mini bar</td>
                </tr>
                <tr>
                  <td>Swimming pool</td>
                  <td>Child friendly</td>
                </tr>
                <tr>
                  <td>Hot tub</td>
                  <td>Games room</td>
                </tr>
                <tr>
                  <td>Bath</td>
                  <td>Wheelchair access</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFeaturedRoom;
