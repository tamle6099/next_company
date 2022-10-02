import React from "react";
import { VintageTitle } from "../../../shares/components/title/VintageTitle";
import { AccountingAuditing } from "./AccountingAuditing";
import { BusinessLicensing } from "./BusinessLicensing";

const LegalCompliance = () => (
  <div className="">
    <AccountingAuditing></AccountingAuditing>
    <BusinessLicensing></BusinessLicensing>
    <div className=" columns-2">
      <VintageTitle
        title={"Merchant Account"}
    
        icon="./share/iconUrl.png"
      ></VintageTitle>
      <VintageTitle
        title={"Merchant Account"}
      
        icon="./share/iconUrl.png"
      ></VintageTitle>
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

export { LegalCompliance };
