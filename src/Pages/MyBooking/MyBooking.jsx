import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingTabile from "./BookingTabile";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setmyBookings] = useState([]);
  useEffect(() => {
    fetch("https://nagar-hotel-booking.vercel.app/confirmation")
      .then((res) => res.json())
      .then((data) => {
        setmyBookings(data);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Booking will be deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes", proceed with deletion
        fetch(`https://nagar-hotel-booking.vercel.app/confirmation/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Booking has been deleted.",
                icon: "success",
              });
              const remaining = myBookings.filter(
                (booking) => booking._id !== id
              );
              setmyBookings(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto lg:py-10 md:py-5 ">
      <Helmet>
        <title>MyBooking | Nagar</title>
      </Helmet>
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
              <th>Name</th>
              <th>location</th>
              <th>Date</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((myBooking) => (
              <BookingTabile
                myBooking={myBooking}
                key={myBooking._id}
                handleDelete={handleDelete}
              ></BookingTabile>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
