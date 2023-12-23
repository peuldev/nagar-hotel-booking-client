import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../SpecialOffers/Offers";
import Reviews from "../UserReviews/Reviews";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <Offers></Offers>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
