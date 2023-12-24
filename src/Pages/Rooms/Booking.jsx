import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const booking = useLoaderData();
  console.log(booking);
  return (
    <div>
      <h1>booking</h1>
    </div>
  );
};

export default Booking;
