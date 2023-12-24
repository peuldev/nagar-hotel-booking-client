import React, { useEffect, useState } from "react";

const Rooms = () => {
  const [featuredRooms, setfeaturedRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setfeaturedRooms(data));
  }, []);
  console.log(featuredRooms);
  return (
    <div>
      <div className="lg:py-20 md:py-10 py-5 text-center space-y-2">
        <h1 className="lg:text-5xl md:text-3xl text-xl lg:font-bold md:font-semibold font-medium">
          Choose your Room
        </h1>
        <p className="text-base text-[#64688c]">
          Laborum accusantium libero commodi. Voluptate consequatur itaque
          expedita accusamus impedit <br /> perspiciatis asperiores
          necessitatibus assumenda magnam ipsa.
        </p>
      </div>
    </div>
  );
};

export default Rooms;
