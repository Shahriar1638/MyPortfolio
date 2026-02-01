import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CV from "../Pages/CV/CV";
import Contact from "../Pages/Contacts/Contact";
import Project from "../Pages/Home/Project";

const PageRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/cv",
          element: <CV />,
        },
        {
          path: "/contacts",
          element: <Contact />,
        },
        {
          path: "/contact", // Redirect alias/fallback
          element: <Contact />,
        },
        {
          path: "/projects",
          element: <Project />,
        },
      ],
    },
  ],
  {
    basename: "/MyPortfolio",
  },
);

export default PageRoutes;
