import React from "react";
import { AboutUs } from "../../../shares/components/itemcard/ContentAbout";
import { data } from "../../../utils/data";

const ContentVTV = () => {
  return (
    <div className="grid grid-cols-2 gap-5 ">
      {data.aboutus.map((infos) => (
        <AboutUs key={infos.id} {...infos} />
      ))}
    </div>
  );
};


export { ContentVTV };
