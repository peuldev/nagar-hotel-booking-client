import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>DetailsOffers</h1>
    </div>
  );
};

export default Details;
