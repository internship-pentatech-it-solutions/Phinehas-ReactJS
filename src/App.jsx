import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
