import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";
import Cart from "./components/page/cart";

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
   
    </>
  );
}

export default App;