import React from "react";
import cat2 from "../Images/cat_image2_desktop.png";

function Bottom() {
  return (
    <div className="flex flex-col m-auto height-cont w-cont">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <img src={cat2} alt="cat treat" className="h-full w-full" />
        </div>
        <div className="flex flex-col w-1/2 p-24">
          <h5 className="mt-6 font-bold spacing ">PET-APPROVED</h5>
          <h5 className="mt-7 font-bold tracking-wide">
            It feels good to be a member.
          </h5>
          <p className="mt-5">
            After your free trial, become a full-time <br /> member with
            benefits for $59 a year.
          </p>
          <ul className="mr-4 list-outside">
            <li className="mt-4">Cancel anytime during the free trial.</li>
            <li className="mt-4">Free shipping on orders with $45.</li>
            <li className="mt-4">
              Direct-to-consumer prices on <br />
              hundreds of premium products.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
