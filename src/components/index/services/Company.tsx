/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VintageTitle } from "../../../shares/components/title/VintageTitle";
import { data } from "../../../utils/data";

const CompanyFormation = () => {
  return (
    <div className="bg-white rounded-2xl">
      <VintageTitle
        title="Company Formation"
        icon="./share/iconUrl.png"
      ></VintageTitle>
      <div className="grid grid-cols-4 gap-x-5 gap-y-8 pt-8">
        {data.companyformation.map((datafile) => (
          <Company key={datafile.id} {...datafile} />
        ))}
      </div>
    </div>
  );
};

const Company = (datafile: any) => (
  <div className="w-full ">
    <div className="company">
      <img
        src={datafile.images}
        alt={datafile.title}
        className="rounded-t-lg"
      />
      <div className="bg-box-shadow p-3">
        <div className="h-32">
          <h2 className="text-base bg-text-black font-semibold">
            {datafile.title}
          </h2>
          <ul className="bg-list-disc pl-6 mt-1">
            <li className="text-sm bg-text-dark">{datafile.decs}</li>
            <li className="text-sm bg-text-dark">{datafile.decs2}</li>
          </ul>
        </div>
        <p className="pl-2 text-right">
          <span className="text-base bg-text-dark">Form </span>
          <span className="text-base bg-text-black font-normal">US$ </span>
          <span className="text-base  font-normal bg-text-green">
            {datafile.price}
          </span>
        </p>
      </div>
    </div>
  </div>
);

export { CompanyFormation };
