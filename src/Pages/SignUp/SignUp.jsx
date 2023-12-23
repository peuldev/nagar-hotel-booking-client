import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const login = { name, email, password };
    console.log(login);
  };
  return (
    <div className="max-w-2xl mx-auto lg:py-20 md:py-10 py-5 font-secondary">
      <form className="card-body" onSubmit={handleSignUp}>
        <h1 className="text-4xl text-center">Create New Account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            name="password"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white hover:bg-info bg-blue">
            Sign Up
          </button>
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <Link className="text-blue" to="/login">
              Login Here
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
