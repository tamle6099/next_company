/* eslint-disable @next/next/no-img-element */
import React from "react";
import { data } from "../../../utils/data";
import { ViewAllServices } from "../../../shares/components/button/ViewAllServices";

const PartnershipList = () => {
  return (
    <div className="grid grid-cols-2 gap-8  mt-10 pb-6 rounded-3xl">
      {data.partnership.map((infos) => (
        <Partnership key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const Partnership = (infos: any) => (
  <div className="w-full">
    <div className="shadow-md rounded-lg bg-white">
      <img
        src={infos.images}
        alt=""
        className="rounded-t-2xl"
      />
      <div className="text p-5 h-32">
        <a className="leading-5 text-lg bg-text-black" href="">
          {infos.title}
        </a>
        <p className="text-base bg-text-dark">{infos.decs}</p>
      </div>
        <div className="p-5 text-right border-t-2">
          <ViewAllServices title={"Get support now"} />
        </div>
    </div>
  </div>
);

export { PartnershipList };
