import React, { useEffect, useState } from "react";
import DisplyRoom from "./DisplyRoom";

const Rooms = () => {
  const [Rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("https://host-c81q.onrender.com/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="lg:py-20 md:py-10 py-5 text-center space-y-2">
        <h1 className="lg:text-5xl md:text-3xl text-4xl lg:font-bold md:font-semibold font-semibold">
          Choose your Room
        </h1>
        <p className="lg:text-xl text-base text-[#64688c]">
          Laborum accusantium libero commodi. Voluptate consequatur itaque
          expedita accusamus impedit <br /> perspiciatis asperiores
          necessitatibus assumenda magnam ipsa.
        </p>
      </div>
      <div className="font-secondary grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-2 lg:pb-28">
        {Rooms.map((room) => (
          <DisplyRoom room={room} key={room.id}></DisplyRoom>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
