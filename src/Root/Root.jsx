import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <div className="font-primary bg-[#ecfafb]">
      <Helmet>
        <title>Root | Nagar</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
