/* eslint-disable @next/next/no-img-element */
import React from "react";

const UtilitiesItem = (datafile: any) => (
  <div className="utilities_item flex flex-col m-5">
    <div className=" utilities_item_img ">
      <img src={datafile.images} alt={datafile.title} className="m-auto" />
    </div>
    <div className=" utilities_item_text text-center m-auto">
      <span className="float-right">{datafile.title}</span>
    </div>
  </div>
);

export { UtilitiesItem };
