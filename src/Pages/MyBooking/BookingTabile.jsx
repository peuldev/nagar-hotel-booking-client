import React from "react";

const BookingTabile = ({ myBooking }) => {
  const { firstName, lastName, location, email, checkIn, checkOut } = myBooking;
  return (
    <>
      <tr>
        <td></td>
        <td>
          {firstName} {lastName}
        </td>
        <td>{location}</td>
        <td>
          In {checkIn} Out {checkOut}
        </td>
        <td>{email}</td>
      </tr>
    </>
  );
};

export default BookingTabile;
