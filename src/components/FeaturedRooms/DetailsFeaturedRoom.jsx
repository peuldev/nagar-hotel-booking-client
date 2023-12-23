import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaBed,
  FaRulerCombined,
  FaBinoculars,
  FaWifi,
  FaCocktail,
  FaSwimmingPool,
  FaChild,
  FaTableTennis,
  FaBath,
  FaWheelchair,
} from "react-icons/fa";
import { MdHotTub } from "react-icons/md";

const DetailsFeaturedRoom = () => {
  const featuredRooms = useLoaderData();
  const { title, images, adults, size, view, price, _id, description } =
    featuredRooms;
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
      {/* ditails  */}
      <div>
        <div className="flex justify-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
            Room Description
          </h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="flex justify-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
            Facilities
          </h1>
        </div>
        {/* table use  */}
        <div className="max-w-2xl mx-auto">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    {" "}
                    <FaWifi /> High speed in-room wifi
                  </td>
                  <td>
                    <FaCocktail /> Mini bar
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>
                    {" "}
                    <FaSwimmingPool />
                    Swimming pool
                  </td>
                  <td>
                    {" "}
                    <FaChild /> Child friendly
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>
                    {" "}
                    <MdHotTub /> Hot tub
                  </td>
                  <td>
                    {" "}
                    <FaTableTennis /> Games room
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>
                    {" "}
                    <FaBath /> Bath
                  </td>
                  <td>
                    {" "}
                    <FaWheelchair /> Wheelchair access
                  </td>
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
