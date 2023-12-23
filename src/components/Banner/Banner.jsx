import React from "react";
import { IoIosSearch } from "react-icons/io";
import coverImages from "../../assets/Hotel/image-banner.jpg";
import icon1 from "../../assets/icon/f-1.png";
import icon2 from "../../assets/icon/f-2.png";
import icon3 from "../../assets/icon/f-3.png";
import icon4 from "../../assets/icon/f-4.png";
import { FaCarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div style={{ backgroundImage: "url(" + coverImages + ")" }}>
        {/* banner start  */}
        <div className="max-w-7xl mx-auto">
          <div className="mx-2 lg:py-24 md:py-10 py-5">
            <div className="text-white text-center space-y-3 py-12">
              <h1 className="lg:text-7xl md:text-5xl text-3xl font-medium ">
                Welcome to Nagar
              </h1>
              <p className="lg:text-xl md:text-xl lg:py-5 md:py-2 ">
                Deleniti nostrum laboriosam praesentium quasi quam voluptate.
              </p>
            </div>
            <div
              className="bg-white p-3 lg:rounded-full rounded grid lg:grid-flow-col md:grid-cols-2 gap-5 grid-flow-row border-blue lg:border-4 
                border-opacity-25"
            >
              <div className="join">
                <button className="mr-3 text-base text-[#64688c]">
                  Check-in
                </button>
                <input
                  className="input bg-[#ecfafb] rounded-lg"
                  placeholder="Date"
                  type="date"
                />
              </div>
              <div className="join">
                <button className="mr-3 text-base text-[#64688c]">
                  Check-Out
                </button>
                <input
                  className="input  bg-[#ecfafb] rounded-lg"
                  placeholder="Date"
                  type="date"
                />
              </div>

              <div className="join">
                <button className="mr-3 text-base text-[#64688c]">
                  Adults
                </button>
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
                <button className="mr-3 text-base text-[#64688c]">
                  Children
                </button>
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
                <p className=" bg-blue hover:bg-info text-white rounded-full cursor-pointer text-xl p-4">
                  {" "}
                  <IoIosSearch />
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* banner end  */}
      </div>

      {/* features-card-start */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:py-8 md:py-8 py-5 mx-2 text-center">
          <div>
            <div className="flex justify-center">
              <img className="w-11" src={icon1} alt="" />
            </div>
            <h1 className="mt-2">Airport transfer</h1>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-11" src={icon2} alt="" />
            </div>
            <h1 className="mt-2">All inclusive</h1>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-11" src={icon3} alt="" />
            </div>
            <h1 className="mt-2">Air-conditioned</h1>
          </div>
          <div>
            <div className="flex justify-center">
              <img className="w-11" src={icon4} alt="" />
            </div>
            <h1 className="mt-2">Under protection</h1>
          </div>
        </div>
      </div>

      {/* features-card-end */}
    </div>
  );
};

export default Banner;
