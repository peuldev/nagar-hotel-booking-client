import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const login = { email, password };
    console.log(login);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  const handeGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .then((error) => console.error(error));
  };
  return (
    <div className="max-w-2xl mx-auto lg:py-20 md:py-10 py-5 font-secondary">
      <Helmet>
        <title>Login | Nagar</title>
      </Helmet>
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
        <div>
          <p>
            New user?{" "}
            <Link className="text-blue" to="/signup">
              Register Here
            </Link>{" "}
          </p>
        </div>
      </form>
      <button onClick={handeGoogleLogin} className="btn btn-primary">
        google
      </button>
    </div>
  );
};

export default Login;
