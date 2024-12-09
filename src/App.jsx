import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import {
  HomeLayout,
  Home,
  AboutUs,
  Services,
  ContactUs,
  Error,
  CacPreIncoperation,
} from "./pages";

// Create Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "services", element: <Services /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "CAC_pre-incoperation", element: <CacPreIncoperation /> },
    ],
  },
]);

const App = () => {
  console.log("App rendering");

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
