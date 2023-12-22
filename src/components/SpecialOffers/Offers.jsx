import React, { useEffect, useState } from "react";
import SpecialOffers from "./SpecialOffers";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="mx-2">
          <div className="flex justify-center">
            <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline">
              Special Offers
            </h1>
          </div>
          {/* Offers Images  */}
          <div className="py-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {offers.map((offer) => (
              <SpecialOffers offer={offer} key={offer._id}></SpecialOffers>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
