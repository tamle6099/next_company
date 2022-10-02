import React from "react";
import Search from "../../../shares/components/search/Search";
import ListJurisdictions from "./country/ListJurisdictions";
import { CompanyTitle } from "./introduce/CompanyTitle";

function Jurisdiction() {
  return (
    <div>
      <CompanyTitle title={"We are cappable of providing company formation service in more than 27 jurisdictions globally. We make sure our clients can make the best investment decision when doing business overseas. Explore and get started today."}
      img="/share/jurisdictions.png"
      ></CompanyTitle>
      <div className="mt-10">
        <Search />
      </div>
      <div className="pt-3">
        <ListJurisdictions />
      </div>
     
    </div>
  );
}

export default Jurisdiction;
