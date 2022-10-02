/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Submit } from "../../../shares/components/button/Submit";
import { data } from "../../../utils/data";

const BankingAccount = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-8 px-6">
      {data.banks.map((datafile) => (
        <BankingAccountChildren key={datafile.id} {...datafile} />
      ))}
    </div>
  );
};
const BankingAccountChildren = (datafile: any) => (
  <div className="w-full ">
    <div className="banks bg-white">
      <div className="bank_img  text-center">
        <img
          src={datafile.imgUrl}
         
          className=" m-auto"
        />
        <span className="name_bank font-medium m-auto pt-2 ">
        {datafile.nameBanks}
        </span>
        <span className="web_bank">
        {datafile.webBanks}
        </span>
      </div>
      <div className="bank_decoration">
        <div className="mb-2">
          <span className="font-medium">Initial Deposit</span>
          <span className="float-right">{datafile.initialDeposit}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">Average Time</span>
          <span className="float-right">{datafile.averageTime}</span>
        </div>
        <div className="mb-2">
          <span className="font-medium">Service Fee</span>
          <span className="float-right">US$ <strong className="font-normal">{datafile.serviceFee}</strong></span>
        </div>
      </div>
      <div className="bank_bnt">
      <Submit title="Order Now"></Submit>
      </div>

     
    </div>
  </div>
);

export { BankingAccount };
