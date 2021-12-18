import React from "react";
import catDesk from "../Images/cat_image1_desktop.png";

function Top() {
  return (
    <div className=" flex flex-row m-auto height-cont w-cont ">
      <div className=" w-full flex flex-col items-start mt-14">
        <h2 className="font-bold text-3xl tracking-wide">
          Treat your pet (and you).
        </h2>
        <h2 className="font-bold text-3xl">It's on us!</h2>
        <p className="mt-4 tracking-wide">
          Treat your pet to a healthy treat for <strong>free</strong> to kick
          off <br /> your Public Goods trial membership.
        </p>
        <h6 className="font-bold mt-4 tracking-normal text-lg">
          See what it's like to be a Public Goods member.
        </h6>
        <div className="p-5">
          <ul className="list-disc">
            <li className="">
              <p className="tracking-wide">
                Included in your bundle is a free 2-week <br /> membership that
                gives you unlimited access to <br /> our entire collection of
                sustainable essentials.
              </p>
            </li>
            <li>
              <p className="tracking-wide mt-4">
                Take a load off. We make it easy for you to make <br />
                better choices. Always included: eco-friendly <br /> products
                you can trust.
              </p>
            </li>
          </ul>
        </div>
        <button className="bg-btn text-text w-11/12 mt-4 h-11 text-white font-bold">
          Claim your free offer
        </button>
      </div>
      <div className="w-full">
        <img
          className="w-full h-full float-right object-cover"
          src={catDesk}
          alt="gray cat"
        />
      </div>
    </div>
  );
}

export default Top;
