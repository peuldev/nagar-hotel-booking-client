import React from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const login = { email, password };
    console.log(login);
  };
  return (
    <div className="max-w-2xl mx-auto lg:py-20 md:py-10 py-5">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            name="email"
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
