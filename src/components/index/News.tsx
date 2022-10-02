import React from "react";
import { ViewAllServices } from "../../shares/components/button/ViewAllServices";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { ListInsights } from "./news/Insights";
import { ListNews } from "./news/ListNews";

const News = () => (
  <div className="container    mr-auto">
    <HeaderTitle title="News & Insights"></HeaderTitle>
    <div className="grid grid-cols-2 gap-8  mt-10 pb-6 rounded-3xl">
      <ListNews></ListNews>
      <ListInsights></ListInsights>
    </div>
    <div className="flex justify-center items-center ">
      <div className=" w-2/6 rounded-lg p-2 border-2 text-center cursor-pointer">
      <ViewAllServices title={"View full list"}></ViewAllServices>
      </div>
    </div>
  </div>
);

export { News };
