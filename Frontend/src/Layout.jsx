import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";
import FooterWithoutLink from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
function Layout() {
  const navigate = useNavigate();
  const [load, setload] = useState(false);

  return (
    <>
      {load ? (
        <CirclesWithBar />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <FooterWithoutLink />
        </>
      )}
    </>
  );
}

export default Layout;
