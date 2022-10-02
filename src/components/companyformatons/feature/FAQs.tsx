import React from "react";
import { ViewAll } from "../../../shares/components/button/ViewAll";
import { HeaderTitle } from "../../../shares/components/title/HeaderTitle";
import { data } from "../../../utils/data";
import ListFaqs from "./ListFaqs";
const List = () => {
  return (
    <div className="grid grid-cols-2 gap-10 pt-10">
      {data.faqs.map((infos) => (
        <ListFaqs key={infos.id} {...infos} />
      ))}
    </div>
  );
};
const FaqsFeature = () => (
  <div className="faqs">
    <div className="faqs_text ">
      <div className="container mx-auto">
        <div className="relative pt-10 ">
          <div className="mt-5 grid mx-auto justify-center">
            <HeaderTitle title={"FAQs"}></HeaderTitle>
          </div>
          <div className="text-center mt-5 mb-5 ">
            <List></List>
          </div>
          <div className=" mt-5 text-center">
            <ViewAll title={"View all"}></ViewAll>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { FaqsFeature };
