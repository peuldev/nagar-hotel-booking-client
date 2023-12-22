import React from "react";
import comtemporary from "../../assets/SpecialOffers/comtemporary-luxury.jpg";
import elegant from "../../assets/SpecialOffers/elegant-hotel.jpg";
import luxury from "../../assets/SpecialOffers/luxury-bedroom.jpg";
import pillows from "../../assets/SpecialOffers/white-pillows.jpg";
import { FaTag } from "react-icons/fa6";

const SpecialOffers = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-2">
        <div className="flex justify-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline">
            Special Offers
          </h1>
        </div>
        {/* Offers Images  */}
        <div className="py-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          <div>
            <img className="rounded" src={comtemporary} alt="" />
            <h1 className="text-xl font-secondary lg:pt-5 lg:pb-2 py-2">
              Summer Couples Offer
            </h1>
            <div className="flex items-center border-t-2 border-t-border">
              <FaTag className="text-[#b99470]" />
              <p className="ms-2 font-secondary text-[#656a70] py-2">
                20% off August bookings
              </p>
            </div>
          </div>
          <div>
            <img className="rounded" src={elegant} alt="" />
            <h1 className="text-xl font-secondary lg:pt-5 lg:pb-2 py-2">
              Buy One Get One Free
            </h1>
            <div className="flex items-center border-t-2 border-t-border">
              <FaTag className="text-[#b99470]" />
              <p className="ms-2 font-secondary text-[#656a70] py-2">
                1 Adult is free when booking in July
              </p>
            </div>
          </div>
          <div>
            <img className="rounded" src={luxury} alt="" />
            <h1 className="text-xl font-secondary lg:pt-5 lg:pb-2 py-2">
              Family Discount
            </h1>
            <div className="flex items-center border-t-2 border-t-border">
              <FaTag className="text-[#b99470]" />
              <p className="ms-2 font-secondary text-[#656a70] py-2">
                10% off for families in March
              </p>
            </div>
          </div>
          <div>
            <img className="rounded" src={pillows} alt="" />
            <h1 className="text-xl font-secondary lg:pt-5 lg:pb-2 py-2">
              Honeymoon Offer
            </h1>
            <div className="flex items-center border-t-2 border-t-border">
              <FaTag className="text-[#b99470]" />
              <p className="ms-2 font-secondary text-[#656a70] py-2">
                honeymoon suite and items
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
