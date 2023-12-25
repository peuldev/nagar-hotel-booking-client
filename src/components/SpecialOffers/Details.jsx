import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTag } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const DetailsShow = useLoaderData();
  const {
    name,
    image,
    offersTitle,
    description,
    title,
    price,
    size,
    location,
    adults,
    category,
  } = DetailsShow;
  return (
    <div className="max-w-7xl mx-auto font-secondary lg:py-20 md:py-20 py-5 ">
      <Helmet>
        <title>Details | Nagar</title>
      </Helmet>
      <div className="flex justify-center">
        <div>
          <p className="text-3xl">{name}</p>
          <div className="flex items-center py-5">
            <FaTag className="text-[#b99470]" />
            <p className="ms-2 font-secondary text-[#656a70]">{offersTitle}</p>
          </div>
          <div className="lg:py-10 md:py-5">
            <img className="rounded-lg" src={image} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
            Offer Details
          </h1>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex justify-center">
        <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
          Offer Includes{" "}
        </h1>
      </div>

      {/* table use  */}
      <div className="max-w-2xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Title</td>
                <td>{title}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Adults</td>
                <td>{adults}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Location</td>
                <td>{location}</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>Size</td>
                <td>{size}</td>
              </tr>
              {/* row 5 */}
              <tr>
                <td>Category</td>
                <td>{category}</td>
              </tr>
              {/* row 6 */}
              <tr>
                <td>Price</td>
                <td>{price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center py-10">
        <Link to="/rooms">
          <a className=" bg-blue hover:bg-info text-white px-5 py-2 rounded-full cursor-pointer text-base">
            {" "}
            Booking Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Details;
