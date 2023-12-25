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
import MyBooking from "../Pages/MyBooking/MyBooking";
import PrivateRoutes from "./PrivateRoutes";
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
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nagar-hotel-booking-server.vercel.app/offers/${params.id}`
          ),
      },
      {
        path: "showfeaturedroom/:id",
        element: (
          <PrivateRoutes>
            <DetailsFeaturedRoom></DetailsFeaturedRoom>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nagar-hotel-booking-server.vercel.app/featured/${params.id}`
          ),
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
        element: (
          <PrivateRoutes>
            <Booking></Booking>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://nagar-hotel-booking-server.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: "bookingconfirmation/:id",
        element: <BookingConfirmation></BookingConfirmation>,
        loader: ({ params }) =>
          fetch(
            `https://nagar-hotel-booking-server.vercel.app/rooms/${params.id}`
          ),
      },
      {
        path: "mybooking",
        element: (
          <PrivateRoutes>
            <MyBooking></MyBooking>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
