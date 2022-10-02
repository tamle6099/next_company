/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { data } from "../../../utils/data";

const TrustFormation = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-8 px-6">
      {data.trust.map((datafile) => (
        <TrustFormationChildren key={datafile.id} {...datafile} />
      ))}
    </div>
  );
};
const TrustFormationChildren = (datafile: any) => (
  <div className="w-full ">
    <div className="trust bg-white overflow-hidden">
      <div className="trust_img  text-center">
        <img src={datafile.images} className=" m-auto" />
      </div>
      <div className="trust_decoration text-center font-medium mt-3  line">
        <span className="block">{datafile.title}</span>
       
      </div>
      <div className="bank_decoration p-4 text-14">
        <div className="mb-2">
          <span className="font-medium">Time Frame</span>
          <span className="float-right">{datafile.time}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">Fees</span>
          <span className="float-right">US$ <strong className="font-normal" >{datafile.fees}</strong></span>
        </div>
        
      </div>
     
    </div>
  </div>
);

export { TrustFormation };
