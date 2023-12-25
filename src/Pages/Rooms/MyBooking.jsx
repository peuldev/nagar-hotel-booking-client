import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setmyBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/confirmation")
      .then((res) => res.json())
      .then((data) => {
        setmyBookings(data);
      });
  }, []);
  // const
  return (
    <div>
      <h1>My Booking{myBookings.length}</h1>
      {myBookings.map((myBooking) => console.log(myBooking))}
    </div>
  );
};

export default MyBooking;
