/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NewHongKong } from "../../../shares/components/button/NewHK";
import { data } from "../../../utils/data";
const ListInsights = () => {
  return (
    <div>
      {data.news.slice(1).map((infos) => (
        <Insights key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const Insights = (infos: any) => (
  <div className="w-full">
    <div className=" bg-white flex flex-wrap mb-4">
      <div className="img w-1/4">
        <img src={infos.images} alt="" className="" />
      </div>
      <div className="text w-3/4 pl-3">
        <a className="leading-5 text-base bg-text-black m-0 font-medium" href="">
          {infos.title}
        </a>
        <div className="flex justify-between mt-2">
          <NewHongKong />
        </div>
      </div>
    </div>
  </div>
);

export { ListInsights };
