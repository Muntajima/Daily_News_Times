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
import PrivateRoute from "./PrivateRoute";
import AddArticle from "../Pages/AddArticle/AddArticle";
import Dashboard from "../Layouts/Dashboard";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import AllArticle from "../Pages/DashBoard/AllUser/AllArticle/AllArticle";
import AllPublishers from "../Pages/DashBoard/AllUser/Publishers/AllPublishers";

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
    {
      path: 'add-article',
      element: <PrivateRoute><AddArticle/></PrivateRoute>
  },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'alluser',
          element: <AllUser/>
        },
        {
          path: 'all-articles',
          element: <AllArticle/>
        },
        {
          path: 'publishers',
          element: <AllPublishers/>
        }
      ]
    }
  ]);

export default router;