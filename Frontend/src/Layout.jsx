import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";
import FooterWithoutLink from "./components/Footer";
import { useNavigate } from "react-router-dom";
function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Outlet />
      <FooterWithoutLink />
    </>
  );
}

export default Layout;
