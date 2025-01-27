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
import AllNews from "../Pages/Home/AllNews/AllNews";
import Details from "../Pages/Details/Details";
import Payment from "../Pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'subcription',
        element: <PrivateRoute><Subcription /></PrivateRoute>
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'add-article',
        element: <PrivateRoute><AddArticle /></PrivateRoute>
      },
      {
        path: 'allnews',
        element: <AllNews />
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><Details/></PrivateRoute>,
       },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'home',
        element: <MainLayout />
      },
      {
        path: 'alluser',
        element: <AllUser />
      },
      {
        path: 'all-articles',
        element: <AllArticle />
      },
      {
        path: 'publishers',
        element: <AllPublishers />
      }
    ]
  }
]);

export default router;