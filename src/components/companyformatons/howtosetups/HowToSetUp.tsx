import React from "react";
import { HeaderTitle } from "../../../shares/components/title/HeaderTitle";
import { data } from "../../../utils/data";

import CountrySetupTabs from "./CountrySetupTabs";
import IconSetup from "./IconSetUp";
const ListSetUp = () => {
  return (
    <div className="grid grid-cols-2 gap-10 pt-10">
      {data.setup.map((infos) => (
        <CountrySetupTabs
          key={infos.id}
          {...infos}
        />
      ))}
    </div>
  );
};

function HowToSetUp() {
  return (
    <div className="container mx-auto">
      <div className="grid mx-auto justify-center">
        <HeaderTitle title="How to incorporate your company"></HeaderTitle>
      </div>
      <IconSetup />
      <ListSetUp></ListSetUp>
    </div>
  );
}

export default HowToSetUp;
