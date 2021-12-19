import React from "react";
import treat from "../Images/cat_treats_fd_minnows_01 3.png";

function Middle() {
  return (
    <div className="middle bg-mid flex flex-col m-auto height-cont w-cont mt-12">
      <h4 className="text-center font-bold mt-10">OUR TREAT</h4>
      <div className=" flex flex-row">
        <div className="image1 flex flex-col w-1/2  items-center text-center mt-10">
          <img src={treat} alt="cat treat" className="h-80 w-80" />

          <h5 className="title mt-6 font-bold">Freeze Dried Minnows</h5>
          <h5 className="sub-title mt-2">
            Healthy ingredients with nothing to hide.
          </h5>
        </div>
        <div className="image2 flex flex-col w-1/2 items-center text-center mt-10">
          <img src={treat} alt="cat treat" className=" h-80 w-80" />

          <h5 className="mt-6 font-bold">Freeze Dried Minnows</h5>
          <h5 className="mt-2">Healthy ingredients with nothing to hide.</h5>
        </div>
      </div>
    </div>
  );
}

export default Middle;
