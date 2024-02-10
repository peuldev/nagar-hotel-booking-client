import React from "react";

const Services = () => {
  return (
    <div className="text-center font-secondary">
      <div className="flex justify-center">
        <h2 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline font-primary">
          Our Services
        </h2>
      </div>
      <h1 className="lg:text-5xl text-3xl font-fraunces py-5">
        In the realm of natural <br />{" "}
        <strong className="italic">Beauty</strong>
      </h1>
      <p className="text-[#898D96] text-lg lg:w-1/2 flex mx-auto py-5">
        Blending contemporary comforts with the breathtaking beauty of nature,
        we've crafted a one-of-a-kind sanctuary for you to truly savor every
        moment.
      </p>
    </div>
  );
};

export default Services;
