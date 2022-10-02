import React from "react";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";
import { PartnershipList } from "./Partnership/PartnershipList";

const Partnership = () => (
  <div className="">
    <HeaderTitle title="Partnership & Intermediaries"></HeaderTitle>
    <PartnershipList></PartnershipList>
  </div>
);

export { Partnership };
