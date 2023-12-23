import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../SpecialOffers/Offers";
import Reviews from "../UserReviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offers></Offers>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
