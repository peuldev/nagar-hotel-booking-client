import React, { useEffect, useState } from "react";
import ShowFeaturedRoom from "./ShowFeaturedRoom";

const FeaturedRooms = () => {
  const [featuredRooms, setfeaturedRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/featured")
      .then((res) => res.json())
      .then((data) => setfeaturedRooms(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-2">
        <div className="flex justify-center">
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning my-5 py-5 inline">
              Featured Rooms
            </h1>
          </div>
        </div>
        <div className="my-10 font-secondary">
          <p className="text-center text-base text-[#656a70]">
            Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit
            amet. Nulla mattis, <br /> urna et posuere ornare, neque leo dapibus
            ante, nec dignissim.
          </p>
        </div>
      </div>
      <div className="font-secondary grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-2">
        {featuredRooms.map((featuredRoom) => (
          <ShowFeaturedRoom
            featuredRoom={featuredRoom}
            key={featuredRoom.id}
          ></ShowFeaturedRoom>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
