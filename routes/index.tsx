import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import NotFound from "../src/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/", element: <Home />, errorElement: <NotFound />,
  },
]);

export default router;