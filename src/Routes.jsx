import { createBrowserRouter } from "react-router-dom";
import MyProfile from "./components/page/myprofile";
import Signin from "./components/page/signin";
import Layout from "./layout";
import Login from "./components/page/logIn";
import Home from "./home";
import FollowersList from "./components/page/FollowersList";
import FollowingsList from "./components/page/FollowingsList";


export const Routes = createBrowserRouter([
  {
    path: "Signin",
    element: <Signin />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "MyProfile", element: <MyProfile /> },
      { path: "followers/:username", element: <FollowersList /> },
      { path: "followings/:username", element: <FollowingsList /> },
    ],
  },
]);
