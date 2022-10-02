/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VintageTitle } from "../../../shares/components/title/VintageTitle";

const Office = () => {
  return (
    <div className="bg-white mt-10 rounded-2xl">
      <VintageTitle
        title="Serviced Office"
        icon="./share/iconUrl.png"
    
      ></VintageTitle>
      <div className="grid grid-cols-2 gap-6 pt-10">
      </div>
        <OfficeServiced />
    </div>
  );
};

const OfficeServiced = () => (
  <>
  <div className="grid grid-cols-2 gap-x-5 gap-y-10">
    <div className="company">
      <img
        src="/share/virtual-office.png"
        alt=""
        className="rounded-t-2xl"
      />
      <div className="rounded-b-2xl p-3">
        <div className="">
          <h2 className="text-2xl text-[#646464] font-semibold">
          Benefits
          </h2>
          <ul className="bg-benefits pl-6 mt-1">
            <li className="text-sm bg-text-dark">Use of a business address to get in touch and manage your clientele.</li>
            <li className="text-sm bg-text-dark">Call transfers to wherever you are, worldwide.</li>
            <li className="text-sm bg-text-dark">Receiving mailings from the local government authority, banks, etc..</li>
            <li className="text-sm bg-text-dark">Using the address on your business cards and website.</li>
            <li className="text-sm bg-text-dark">A local telephone number can be set up in one working day.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="company">
      <img
        src="/share/co-working-plan.png"
        alt=""
        className="rounded-t-2xl"
      />
      <div className="rounded-b-2xl p-3">
        <div className="">
          <h2 className="text-2xl text-[#646464] font-semibold">
          Benefits
          </h2>
          <p className="text-sm bg-text-dark">Offshore Company Corp opens its workspace in Hong Kong to global business enthusiasts and visionary minds.</p>
          <ul className="bg-benefits  pl-6 mt-1">
            <li className="text-sm bg-text-dark">Use of a business address to get in touch and manage your clientele.</li>
            <li className="text-sm bg-text-dark">Call transfers to wherever you are, worldwide.</li>
            <li className="text-sm bg-text-dark">Receiving mailings from the local government authority, banks, etc..</li>
            <li className="text-sm bg-text-dark">Using the address on your business cards and website.</li>
            <li className="text-sm bg-text-dark">A local telephone number can be set up in one working day.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="company">
      <img
        src="/share/dedicated-office.png"
        alt=""
        className="rounded-t-2xl"
      />
      <div className="rounded-b-2xl p-3">
        <div className="">
          <h2 className="text-2xl text-[#646464] font-semibold">
          Benefits
          </h2>
          <ul className="bg-benefits pl-6 mt-1">
            <li className="text-sm bg-text-dark">Use of a business address to get in touch and manage your clientele.</li>
            <li className="text-sm bg-text-dark">Call transfers to wherever you are, worldwide.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="company">
      <img
        src="/share/meeting-room.png"
        alt=""
        className="rounded-t-2xl"
      />
      <div className=" rounded-b-2xl p-3">
        <div className="">
          <h2 className="text-2xl text-[#646464] font-semibold">
          Benefits
          </h2>
          <ul className="bg-benefits pl-6 mt-1">
            <li className="text-sm bg-text-dark">Use of a business address to get in touch and manage your clientele.</li>
           
          </ul>
        </div>
      </div>
    </div>
  </div>
  </>
);

export { Office };
