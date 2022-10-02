import React from "react";
import { ViewAllServices } from "../../shares/components/button/ViewAllServices";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { SliderList } from "./aboutus/Slider";

const AboutUs = () => (
  <div className="container mr-auto pt-10">

      <HeaderTitle title="What The Media Say About Us"></HeaderTitle>

    <div className="mt-5">
      <SliderList></SliderList>
    </div>
    <div className="flex justify-center items-center pt-10">
      <div className=" w-2/6 rounded-lg p-2 border-2 text-center cursor-pointer">
      <ViewAllServices title={"View full list"}></ViewAllServices>
      </div>
    </div>
  </div>
);

export { AboutUs };
