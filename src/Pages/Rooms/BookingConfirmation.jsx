import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BookingConfirmation = () => {
  const BookingData = useLoaderData();
  const { category } = BookingData;
  const handleConfirmation = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const location = form.location.value;
    const yourEmail = form.your_email.value;
    const CheckIn = form.Check_In.value;
    const CheckOut = form.Check_Out.value;
    const ConfirmationInfo = {
      firstName,
      lastName,
      location,
      yourEmail,
      CheckIn,
      CheckOut,
    };
    console.log(ConfirmationInfo);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-2">
        <div className=" lg:py-20 md:py-10 py-5 text-center space-y-2">
          <h1 className="lg:text-5xl md:text-3xl text-4xl lg:font-bold md:font-semibold font-semibold  ">
            Booking Confirmation
          </h1>
          <p className="text-base py-2">
            Returning customer?{" "}
            <Link to="/rooms" className="border-b">
              Click here
            </Link>{" "}
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl">Booking Details</h1>
          <p className="text-xl mt-5">
            Accommodation Type: <span className="border-b">{category}</span>
          </p>
        </div>
        <div>
          <form className="card-body" onSubmit={handleConfirmation}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                  name="first_name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                  name="last_name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="input input-bordered"
                  required
                  name="location"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                  name="your_email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Check-In</span>
                </label>
                <input
                  type="date"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                  name="Check_In"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Check-Out</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                  name="Check_Out"
                />
              </div>
            </div>
            <div className="form-control mt-6 font-secondary">
              <input
                className="btn bg-blue text-white"
                type="submit"
                value="Confirmation"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
