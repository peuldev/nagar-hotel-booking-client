import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="lg:py-64 md:py-40 py-20">
      <Helmet>
        <title>About | Nagar</title>
      </Helmet>
      <h1 className="text-center text-5xl font-bold">About</h1>
    </div>
  );
};

export default About;
