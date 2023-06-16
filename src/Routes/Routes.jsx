import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import ToyLayout from "../Layout/ToyLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import Blogs from "../Pages/Blogs/Blogs";
// import ToyDetails from "../Pages/ToyDetails/ToyDetails";
// import ToyLayout from "../Layout/ToyLayout";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

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
        path: "/toys",
        element: <AllToys></AllToys>,
        
      },
     

      {
        path: "/addToys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/allToys/:id",
    element:<ToyDetails></ToyDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/allToy/${params._id}`),
    
  },
  
]);

export default router;
