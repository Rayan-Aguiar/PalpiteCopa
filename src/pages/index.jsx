import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
  
  import { Dashboard } from "./Dashboard";
  import { Home } from "./Home";
  import { Login} from "./Login";
  import { Signup } from "./Signup";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },    
    {
      path: "/signup",
      element: <Signup />,
    },   
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  
  export const Router = () =>(
    <RouterProvider router={router} />

  )