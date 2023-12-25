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
    <div className="max-w-7xl mx-auto lg:py-10 md:py-5 ">
      <h1 className="text-center py-5 text-2xl border-b border-b-border">
        Total Booking : <span className="font-bold">{myBookings.length}</span>
      </h1>
      <div className="block md:hidden lg:hidden mx-2 text-center py-5">
        <h1 className="text-xl">Small Device Not Available Booking data</h1>
        <p className="text-base">Please Login Labtop or Computer</p>
      </div>
      <div className="overflow-x-auto hidden lg:block md:block">
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
