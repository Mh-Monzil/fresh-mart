import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Shop from "../components/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        }
    ]
  },
]);
