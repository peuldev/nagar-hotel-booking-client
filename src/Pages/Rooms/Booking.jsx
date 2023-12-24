import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const booking = useLoaderData();
  const {
    category,
    title,
    image,
    adults,
    size,
    price,
    _id,
    location,
    description,
  } = booking;
  console.log(booking);
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="lg:py-20 md:py-10 py-5 text-center space-y-2">
          <h1 className="lg:text-5xl md:text-3xl text-4xl lg:font-bold md:font-semibold font-semibold">
            Room {category}
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <img className="rounded" src={image} alt="" />
          </div>
          <div className="text-[#64688c]">
            <div>
              <div className="bg-white text-xl py-3 px-5 rounded-lg">
                <span>Adults: {adults}</span>
                <span>Size {size}</span>
              </div>
              <div className="bg-white text-xl py-3 px-5 rounded-lg mt-5">
                <span>Adults: {adults}</span>
              </div>
              <div className="bg-white text-xl py-3 px-5 rounded-lg mt-5">
                <span>Adults: {adults}</span>
                <span>Size {size}</span>
              </div>
              <div className=" text-xl py-3 px-5 rounded-full my-5 bg-blue hover:bg-info text-white cursor-pointer text-center">
                <span>Confirm Booking</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>{title}</h3>
          <p className="">{description}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <form className="card-body">
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Review"
            ></textarea>
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6 inline">
            <p className="bg-blue hover:bg-info text-white px-5 py-3 cursor-pointer text-base rounded-full inline">
              Sumit
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;