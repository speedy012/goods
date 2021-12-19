import React from "react";
import cat2 from "../Images/cat_image2_desktop.png";

function Bottom() {
  return (
    <div className="bottom flex flex-row m-auto height-cont w-cont">
      <div className=" w-1/2">
        <img src={cat2} alt="cat treat" className="w-full h-full" />
      </div>
      <div className="container flex flex-col w-1/2 h-full p-24">
        <h5 className="bt-title mt-6 font-bold spacing ">PET-APPROVED</h5>
        <h5 className="bt-subtitle mt-7 font-bold tracking-wide">
          It feels good to be a member.
        </h5>
        <p className="trial-info mt-5">
          After your free trial, become a full-time <br /> member with benefits
          for $59 a year.
        </p>
        <ul className="mr-4">
          <li className="li2 mt-4">Cancel anytime during the free trial.</li>
          <li className="li2 mt-4">Free shipping on orders with $45.</li>
          <li className="li2 mt-4 mb-24">
            Direct-to-consumer prices on <br className="br2" />
            hundreds <br className="br1 hidden" /> of premium products.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottom;
