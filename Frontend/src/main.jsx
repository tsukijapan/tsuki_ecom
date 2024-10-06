import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
      { path: "/Cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishlist /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
