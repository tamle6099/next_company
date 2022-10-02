import React from "react";
import { ViewAll } from "../../../shares/components/button/ViewAll";
import { HeaderTitle } from "../../../shares/components/title/HeaderTitle";

const HowWork = () => (
  <div className="work">
    <div className="work_text ">
      <div className="container mx-auto">
        <div className="relative pt-10 text-white ">
          <div className="mt-5 grid mx-auto text-white justify-center">
            <HeaderTitle title={"How It Works?"}></HeaderTitle>
          </div>
        <div className="text-center mt-5 mb-5">
        Find out everything you need to start an offshore business. It’s simple, fast and effective. Our dedicated experts is here to support you through all the processes.
Set up at Offshore Company Corp now in just 4 easy steps.
        </div>
          <div className=" mt-5 text-center">
            <ViewAll title={"View all"}></ViewAll>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { HowWork };
