import React from "react";
import { data } from "../../../utils/data";
import { QuestionsForm } from "../../index/questions/QuestionsForm";
import { UtilitiesItem } from "./utilities";

const Utilities = () => {
  return (
    <div className="grid grid-cols-2 m-5">
      {data.utilities.map((datafile) => (
        <UtilitiesItem key={datafile.id} {...datafile} />
      ))}
    </div>
  );
};
const Feature = () => (
  <div className="utilities">
    <div className="grid grid-cols-2 ">
    <div className="bod_box mt-10 mr-12">
      <Utilities></Utilities>
      </div>
      <div className=" mt-10 bg-white rounded-lg shadow-md p-5">
        <QuestionsForm></QuestionsForm>
      </div>
    </div>
  </div>
);

export { Feature };
