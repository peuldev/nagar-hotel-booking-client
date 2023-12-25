import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Rooms from "../Pages/Rooms/Rooms";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Shop from "../Pages/Shop/Shop";
import Details from "../components/SpecialOffers/Details";
import DetailsFeaturedRoom from "../components/FeaturedRooms/DetailsFeaturedRoom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Booking from "../Pages/Rooms/booking";
import BookingConfirmation from "../Pages/Rooms/BookingConfirmation";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/offers/${params.id}`),
      },
      {
        path: "showfeaturedroom/:id",
        element: <DetailsFeaturedRoom></DetailsFeaturedRoom>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/featured/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "booking/:id",
        element: <Booking></Booking>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "bookingconfirmation/:id",
        element: <BookingConfirmation></BookingConfirmation>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
    ],
  },
]);

export default Routes;
