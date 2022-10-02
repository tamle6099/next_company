/* eslint-disable @next/next/no-img-element */
import React from "react";
const OneIBCClub = () => (
  <div>
    <div className="grid grid-cols-2 gap-12">
      <div>
        <h3 className="bg_fs-40 text-white">OneIBC Club</h3>
        <p className="text-base text-white mt-5">
          There are four rank levels of ONE IBC membership. Advance through
          three elite ranks when you meet qualifying criteria. Enjoy elevated
          rewards and experiences throughout your journey. Explore the benefits
          for all levels. Earn and redeem credit points for our services.
        </p>
       
        
      </div>
      <div>
      <div className="flex mb-4 pt-4">
          <div className="w-1/6">
            <img
              src="/share/investment.png"
              alt=""
              className="oneibncclud-icon"
            />
          </div>
          <div className="w-5/6 p-2">
            <p className="text-lg text-white font-medium">Earning Points</p>
            <p className="text-base text-white">
              Earn Credit Points on qualifying purchasing of services. You’ll{" "}
              <br></br> earn credit Points for every eligible U.S. dollar spent.
            </p>
          </div>
        </div>
      <div className="flex mb-4">
          <div className=" w-1/6">
            <img
              src="/share/aupport_multiple.png"
              alt=""
              className="oneibncclud-icon"
            />
          </div>
          <div className="w-5/6 p-2">
            <p className="text-lg text-white font-medium">Using Points</p>
            <p className="text-base text-white">
              Spend credit points directly for your invoice.<br></br>100 credit
              points = 1 USD
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
);

export { OneIBCClub };
