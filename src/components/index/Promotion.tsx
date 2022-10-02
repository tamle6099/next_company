import React from "react";
import { ViewAll } from "../../shares/components/button/ViewAll";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { ListPromotion } from "./promotion/ListPromotion";

const Promotion = () => (
  <div className="bg-[#FFEBEB] pt-10">
    <div className="container mx-auto flex justify-between">
    <HeaderTitle title="Promotion"></HeaderTitle>
    <ViewAll title={"View full list"}/>
    </div>
  <div className=" pb-10">
    <ListPromotion></ListPromotion>
  </div>
  </div>
);

export { Promotion };
