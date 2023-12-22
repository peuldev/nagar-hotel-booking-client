import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Rooms from "../Pages/Rooms/Rooms";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Shop from "../Pages/Shop/Shop";
import DetailsOffers from "../components/SpecialOffers/DetailsOffers";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/restaurant",
        element: <Restaurant></Restaurant>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/detailsoffers/:id",
        element: <DetailsOffers></DetailsOffers>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/offers${params.id}`),
      },
    ],
  },
]);

export default Routes;
