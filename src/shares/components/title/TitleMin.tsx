import React from "react";

type IHeaderTitle = {
  title: String;
};
const TitleMin = (props: IHeaderTitle) => (
  <div className="title_min">
    <p className="text-gray font-normal text-gray-600 ml-8"> {props.title}</p>
    <span></span>
  </div>
);

export { TitleMin };
