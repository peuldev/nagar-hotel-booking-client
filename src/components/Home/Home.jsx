import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../SpecialOffers/Offers";
import Reviews from "../UserReviews/Reviews";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import { Helmet } from "react-helmet-async";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Nagar</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <Offers></Offers>
      <Reviews></Reviews>
      <Services></Services>
    </div>
  );
};

export default Home;
