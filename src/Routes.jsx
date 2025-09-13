import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import LogIn from "./components/page/logIn";
import Signin from "./components/page/signin";
import Home from "./home";
import Profile from "./components/page/profile";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <LogIn /> },
      { path: "Signin", element: <Signin /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
