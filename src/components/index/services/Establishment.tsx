import React from "react";
import { VintageTitle } from "../../../shares/components/title/VintageTitle";
import { CompanyFormation } from "./Company";
import { Office } from "./Office";

const Establishment = () => (
  <div>
    <CompanyFormation></CompanyFormation>
    <Office></Office>
    <div className="columns-2 pb-2 pt-8">
      <VintageTitle
        title={"Merchant Account"}
        icon="./share/iconUrl.png"
      ></VintageTitle>
      <VintageTitle
        title={"Merchant Account"}
  
        icon="./share/iconUrl.png"
      ></VintageTitle>
    </div>
  </div>
);

export { Establishment };
