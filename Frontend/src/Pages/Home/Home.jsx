import React from "react";

import Carousel from "../../components/Carousel";
import NewArrived from "../../components/NewArrived";

function Home() {
  return (
    <>
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <NewArrived />
      </div>
    </>
  );
}

export default Home;
