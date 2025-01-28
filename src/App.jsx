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
  TinRegistrationPage,
  Development,
  WebDesignPackages,
  WebDesignPlans,
  EcommercePlans,
  Division,
  GraphicDesign,
  AdsPage,
  PlanTypes,
  MonthlyPlan,
  WeeklyPlans,
  Subscription,
  CacPostIncoperation,
  AnnualReturnMain,
  Login,
  Register,
  Orders,
  SCUMLRegistration,
  SCUMLform,
  BusinessNameOrders,
  LLCorders,
  AllUsersOrders,
  TrusteeOrders,
  SCUMLorders,
  TINorders,
  FirstTinStage,
  JTBform,
  JTBorder,
  FIRSorders,
  FIRSform,
  AdsOrders,
  WebDesignOrders,
  GraphicDesignOrders,
  AllBusinessNameOrders,
  AllLLCorders,
  AllSCUMLorders,
  AllAdsSubscriptionOrders,
  AllTrusteeOrders,
  PostIncoRedirect,
  PrivacyPolicy,
  TermsOfUse,
} from "./pages";
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { store } from "./store";
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
        path: "TIN_Registration",
        element: <TinRegistrationPage />,
      },
      {
        path: "Choose_TIN_Type",
        element: <FirstTinStage />,
      },
      {
        path: "JTB_form",
        element: <JTBform />,
      },
      {
        path: "FIRS_orders",
        element: <FIRSorders />,
      },
      {
        path: "JTB_orders",
        element: <JTBorder />,
      },
      {
        path: "FIRS_form",
        element: <FIRSform />,
      },
      {
        path: "SCUML_Registeration",
        element: <SCUMLRegistration />,
      },
      {
        path: "SCUML_Form",
        element: <SCUMLform />,
      },
      {
        path: "social_media_ads",
        element: <AdsPage />,
      },
      {
        path: "ads_subscription",
        element: <Subscription />,
      },
      {
        path: "plan_types",
        element: <PlanTypes />,
      },
      {
        path: "ads_monthly_subscription",
        element: <MonthlyPlan />,
      },
      {
        path: "ads_weekly_subscription",
        element: <WeeklyPlans />,
      },
      {
        path: "website_app_design_development",
        element: <Development />,
      },
      {
        path: "website_design_packages",
        element: <WebDesignPackages />,
      },
      {
        path: "choose_design_packages",
        element: <Division />,
      },
      {
        path: "web_design_plans",
        element: <WebDesignPlans />,
      },
      {
        path: "e-commerce_plans",
        element: <EcommercePlans />,
      },
      {
        path: "graphic_design",
        element: <GraphicDesign />,
      },
      {
        path: "CAC_post_incoperation",
        element: <CacPostIncoperation />,
      },
      {
        path: "CAC_PostInco_Redirect",
        element: <PostIncoRedirect />,
      },
      {
        path: "Annual_return",
        element: <AnnualReturnMain />,
      },
      {
        path: "ongoing_orders",
        element: <Orders />,
      },
      {
        path: "businessName_orders",
        element: <BusinessNameOrders />,
      },
      {
        path: "LLC_orders",
        element: <LLCorders />,
      },
      {
        path: "SCUML_orders",
        element: <SCUMLorders />,
      },
      {
        path: "Ads_Orders",
        element: <AdsOrders />,
      },
      {
        path: "Trustee_orders",
        element: <TrusteeOrders />,
      },
      {
        path: "All_Users_Orders",
        element: <AllUsersOrders />,
      },
      {
        path: "All_BusinessName_Orders",
        element: <AllBusinessNameOrders />,
      },
      {
        path: "All_LLC_Orders",
        element: <AllLLCorders />,
      },
      {
        path: "All_SCUML_Orders",
        element: <AllSCUMLorders />,
      },
      {
        path: "All_Ads_Orders",
        element: <AllAdsSubscriptionOrders />,
      },
      {
        path: "All_Trustee_Orders",
        element: <AllTrusteeOrders />,
      },
      {
        path: "MLB_privacy_Policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "Terms_Of_Use",
        element: <TermsOfUse />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
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
