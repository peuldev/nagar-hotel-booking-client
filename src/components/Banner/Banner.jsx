import React from "react";
import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-2">
        <div>
          <h1 className="lg:text-7xl md:text-3xl font-medium ">
            Welcome to Nagar
          </h1>
          <p>Deleniti nostrum laboriosam praesentium quasi quam voluptate.</p>
        </div>
        <div className="bg-white p-2 my-20 rounded-lg grid lg:grid-flow-col md:grid-cols-2 gap-5 grid-flow-row">
          <div className="join">
            <button className="mr-3 text-base text-[#64688c]">Check-in</button>
            <input
              className="input bg-[#ecfafb] rounded-lg"
              placeholder="Date"
              type="date"
            />
          </div>
          <div className="join">
            <button className="mr-3 text-base text-[#64688c]">Check-Out</button>
            <input
              className="input  bg-[#ecfafb] rounded-lg"
              placeholder="Date"
              type="date"
            />
          </div>

          <div className="join">
            <button className="mr-3 text-base text-[#64688c]">Adults</button>
            {/* <input className="input join-item" placeholder="Date" type="date" /> */}
            <select className="select w-full max-w-xs bg-[#ecfafb] rounded-lg">
              <option disabled selected>
                Pick your Adults
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="join">
            <button className="mr-3 text-base text-[#64688c]">Children</button>
            {/* <input className="input join-item" placeholder="Date" type="date" /> */}
            <select className="select w-full max-w-xs bg-[#ecfafb] rounded-lg">
              <option disabled selected>
                Pick your Children
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="join">
            <button className="mr-3 text-base text-[#64688c]">Find</button>{" "}
            <p className=" bg-blue hover:bg-info text-white rounded-full cursor-pointer text-xl p-3">
              {" "}
              <IoIosSearch />
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
