import React from "react";

const BookingTabile = ({ myBooking, handleDelete }) => {
  const { _id, firstName, lastName, location, email, checkIn, checkOut } =
    myBooking;
  return (
    <>
      <tr>
        <td>
          {firstName} {lastName}
        </td>
        <td>{location}</td>
        <td>
          In {checkIn} Out {checkOut}
        </td>
        <td>{email}</td>
        <td>
          <button onClick={() => handleDelete(_id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default BookingTabile;
