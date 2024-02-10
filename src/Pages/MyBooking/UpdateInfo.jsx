import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateInfo = () => {
  const info = useLoaderData();
  const { firstName, lastName, location, yourEmail, CheckIn, CheckOut, _id } =
    info;
  console.log(info);
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const location = form.location.value;
    const yourEmail = form.your_email.value;
    const CheckIn = form.Check_In.value;
    const CheckOut = form.Check_Out.value;
    const updateInfo = {
      firstName,
      lastName,
      location,
      yourEmail,
      CheckIn,
      CheckOut,
    };
    console.log(updateInfo);
    fetch(`http://localhost:5000/confirmation/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "success",
            text: "Info Update SuccessFuly",
            icon: "success",
            confirmButtonText: "OK",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto lg:py-10 md:py-5 px-2">
      <Helmet>
        <title>Update Info | Nagar</title>
      </Helmet>
      <div className="flex justify-center">
        <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b-2 border-b-warning inline">
          Update Info
        </h1>
      </div>
      <form className="card-body" onSubmit={handleUpdateInfo}>
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
              defaultValue={firstName}
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
              defaultValue={lastName}
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
              defaultValue={location}
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
              defaultValue={yourEmail}
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
              defaultValue={CheckIn}
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
              defaultValue={CheckOut}
            />
          </div>
        </div>
        <div className="form-control mt-6 font-secondary">
          <input
            className="btn bg-blue text-white"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateInfo;
