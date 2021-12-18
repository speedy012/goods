import React from "react";
import cat2 from "../Images/cat_image2_desktop.png";

function Bottom() {
  return (
    <div className="flex flex-col m-auto height-cont w-cont">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <img src={cat2} alt="cat treat" className="h-full w-full" />
        </div>
        <div className="flex flex-col w-1/2  border border-blue-600 mt-10">
          <h5 className="mt-6 font-bold">Pet Approved</h5>
          <h5 className="mt-2">It feels good to be a member.</h5>
          <p>
            After your free trial, become a full-time <br /> member with
            benefits for $59 a year.
          </p>
          <ul>
            <li>Cancel anytime during the free trial.</li>
            <li>Free shipping on orders with $45.</li>
            <li>
              Direct-to-consumer prices on <br />
              hundreds of premium products
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
