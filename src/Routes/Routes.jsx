import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import ToyLayout from "../Layout/ToyLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },

      {
        path: "/allToys",
        element: <PrivateRoute><AllToys></AllToys></PrivateRoute>,
        
      },
     

      {
        path: "/addToys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/myToys",
    element:<ToyLayout></ToyLayout> ,
    loader: ({ params }) => fetch(`http://localhost:5000/allToy/${params._id}`),
    children: [
      {
        path: ":_id",
        element: <ToyDetails></ToyDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
