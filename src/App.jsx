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
  BusinessNameRegistration,
  LLCRegistrationForm,
  LimitedLiabilityRegistration,
  BusinessNameRegistrationForm,
  TrusteeRegistration,
  TrusteeForm,
  Development,
  GraphicDesign,
  AdsPage,
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
      {
        path: "businessNameRegistration",
        element: <BusinessNameRegistration />,
      },

      {
        path: "limited_liabiltiy_registration",
        element: <LimitedLiabilityRegistration />,
      },
      {
        path: "LLC_registration_form",
        element: <LLCRegistrationForm />,
      },
      {
        path: "business_name_registration_form",
        element: <BusinessNameRegistrationForm />,
      },
      {
        path: "incorperated_trustee_registration",
        element: <TrusteeRegistration />,
      },
      {
        path: "trustee_form",
        element: <TrusteeForm />,
      },
      {
        path: "social_media_ads",
        element: <AdsPage />,
      },
      {
        path: "website_app_design_development",
        element: <Development />,
      },
      {
        path: "graphic_design",
        element: <GraphicDesign />,
      },
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
