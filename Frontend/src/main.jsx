import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";

import AllProductPage from "./components/AllProductPage.jsx";
import AdminPanel from "./components/AdminPanel.jsx";

import Profile from "./components/Profile.jsx";
import Login from "./AuthPages/Login.jsx";
import Register from "./AuthPages/Register.jsx";

import ProductDetailPage from "./components/ProductDetailed.jsx";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./components/CartSection.jsx";
import Wishlist from "./components/Wishlist.jsx";
import CustomerSupport from "./components/CustomerSupport.jsx";
import NeedHelp from "./components/NeedHelp.jsx";
import OTPVerification from "./AuthPages/OtpVerification.jsx";
import ProtectedLayout from "./middleware/ProtectedLayout.jsx";
import Logout from "./AuthPages/Logout.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/allproduct",
        element: <AllProductPage />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/product/:id", element: <ProductDetailPage /> },
      {
        path: "/Cart",
        element: (
          <ProtectedLayout>
            <Cart />
          </ProtectedLayout>
        ),
      },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/customer", element: <CustomerSupport /> },
      { path: "/Needhelp", element: <NeedHelp /> },
      { path: "/OtpVerify", element: <OTPVerification /> },
      {
        path: "/logout",
        element: (
          <ProtectedLayout>
            <Logout />
          </ProtectedLayout>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
