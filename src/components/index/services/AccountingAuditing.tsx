/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ViewAll } from "../../../shares/components/button/ViewAll";

import { VintageTitle } from "../../../shares/components/title/VintageTitle";
import { data } from "../../../utils/data";

const AccountingAuditing = () => {
  return (
    <div className="bg-white mb-10">
      <VintageTitle
        title="Accounting & Auditing"
        icon="../share/iconUrl.png"
      ></VintageTitle>
      <div className="grid grid-cols-4 gap-x-5 gap-y-8  mt-10 p-6">
        {data.accounting.map((datafile) => (
          <AccountingAuditingChildren key={datafile.id} {...datafile} />
        ))}
      </div>
      <div className="m-auto text-center pb-1">
     
      </div>
    </div>
  );
};
const AccountingAuditingChildren = (datafile: any) => (
  <div className="w-full ">
    <div className="accounting bg-white overflow-hidden">
      <div className="accounting_img  text-center">
        <img src={datafile.images} className=" m-auto" />
      </div>
      <div className="accounting_decoration text-center font-medium mt-3 mb-3">
        <span>{datafile.title}</span>
      </div>
      <div className="accounting_bnt text-center pb-6">
        <ViewAll title="View more"></ViewAll>
      </div>
    </div>
  </div>
);

export { AccountingAuditing };
