import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTabile from "./BookingTabile";

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
    <div className="max-w-7xl mx-auto">
      {/* <h1>Total Booking : {myBookings.length}</h1> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>location</th>
              <th>Date</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((myBooking) => (
              <BookingTabile
                myBooking={myBooking}
                key={myBooking._id}
              ></BookingTabile>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
