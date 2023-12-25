import React from "react";
import { Helmet } from "react-helmet-async";

const Restaurant = () => {
  return (
    <div className="lg:py-64 md:py-40 py-20">
      <Helmet>
        <title>Restaurant | Nagar</title>
      </Helmet>
      <h1 className="text-center text-5xl font-bold">Restaurant</h1>
    </div>
  );
};

export default Restaurant;
