import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import App from "./App";
import LogIn from "./components/page/logIn";
import Signin from "./components/page/signin";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "login", element: <LogIn /> },
      { path: "signup", element: <Signin /> },
    ],
  },
]);
