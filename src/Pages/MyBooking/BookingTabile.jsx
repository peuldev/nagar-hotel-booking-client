import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const BookingTabile = ({ myBooking, handleDelete, handleConfirm }) => {
  const {
    _id,
    firstName,
    lastName,
    location,
    email,
    checkIn,
    checkOut,
    status,
  } = myBooking;
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
          <div className="join  join-vertical lg:join-horizontal">
            <button
              className="btn join-item btn-sm hover:bg-info bg-blue text-white tooltip"
              data-tip="Update"
            >
              <FiEdit />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item btn-sm bg-red hover:bg-[#EF4040] text-white tooltip"
              data-tip="Delete"
            >
              <MdDelete />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default BookingTabile;
