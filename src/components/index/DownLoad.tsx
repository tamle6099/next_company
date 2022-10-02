/* eslint-disable @next/next/no-img-element */
import React from "react";

const DownLoad = () => (
  <div className="bg-download mt-[14rem]">

  <div className=" flex">
   
    <div className="py-10 relative w-full">
      <div className="container mx-auto flex">
        <div className="grid grid-cols-2 gap-10 ">
          <div>
            <a href="">
              <img src="/assets/images/download-google-play.png" alt="" />
            </a>
            <a href="">
              <img
                src="/assets/images/download-appstore.png"
                alt=""
                className="mt-6"
              />
            </a>
          </div>
          <div>
            <img src="/share/qc-download.png" alt="" />
          </div>
        </div>
        <div className="mt-2">
          <p>Get One IBC</p>
          <p className="mt-10 uppercase">Free Apps</p>
        </div>
      </div>
      <div className="bg-footer-img absolute">
        <img src="/share/footer-chosee.png" alt="" />
      </div>
    </div>
  </div>
  </div>
);

export { DownLoad };
