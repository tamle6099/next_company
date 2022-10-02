/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Submit } from "../../../../shares/components/button/Submit";

function SuccessfulRate() {
  return (
    <div className="flex items-center justify-center text-center  mt-10 ">
      <div className="bg-fees p-10">
        <div className="flex gap-10">
          <div className="px-12 py-2  border-r-dark border-r-2">
            <div className="flex justify-center items-center">
              <img src="/assets/images/icon-service-fee.png" alt="" />
            </div>
            <div className="pt-5">
              <h3>
                <span className="text-base">Only from</span>
                <span className="text-4xl font-medium"> US$</span>
                <span className="text-4xl font-medium bg-text-green"> 299</span>
              </h3>
            </div>
          </div>
          <div className="text-center">
            <div className="flex">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">
                <strong>100%</strong> successful rate
              </span>
            </div>
            <div className="flex mt-3">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">
                <strong>Fast, easy</strong> & <strong>highly</strong> secured
              </span>
            </div>
            <div className="flex mt-3">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">
                Dedicated support <strong>(24/7)</strong>
              </span>
            </div>
            <div className="flex mt-3">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">
                Over <strong>27</strong> jurisdictions around the world
              </span>
            </div>
            <div className="flex mt-3">
              <span className="pt-2">
                <img src="/assets/images/icon-check-black.svg" alt="" />
              </span>
              <span className="pl-3">Just Order, We Do All For You</span>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Submit width={400} title="Incorporate Company Now"></Submit>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulRate;
