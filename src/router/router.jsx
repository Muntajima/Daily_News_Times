import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import ErrorPage from "../Pages/Error/ErrorPage";
import SignUp from "../Pages/Registration/SignUp";
import SignIn from "../Pages/Registration/SignIn";
import Subcription from "../Pages/Subcription/Subcription";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'contact-us',
            element: <ContactUs/>
        },
        {
          path: 'signup',
          element: <SignUp/>
      },
      {
        path: 'signin',
        element: <SignIn/>
    },
    {
        path: 'subcription',
        element: <Subcription/>
    },
      ]
    },
  ]);

export default router;