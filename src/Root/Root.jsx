import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="font-primary max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="mx-2">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
