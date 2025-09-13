import { createBrowserRouter } from "react-router-dom";
import MyProfile from "./components/page/myprofile";
import Signin from "./components/page/signin";
import Layout from "./layout";
import { Login } from "./components/page";
import Home from "./home";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "Signin", element: <Signin /> },
      { path: "MyProfile", element: <MyProfile /> },
    ],
  },
]);
