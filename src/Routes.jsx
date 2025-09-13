import { createBrowserRouter } from "react-router-dom";
import LogIn from "./components/page/logIn";
import MyProfile from "./components/page/myprofile";
import Signin from "./components/page/signin";
import Home from "./home";
import Layout from "./layout";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <LogIn /> },
      { path: "Signin", element: <Signin /> },
      { path: "MyProfile", element: <MyProfile /> },
    ],
  },
]);
