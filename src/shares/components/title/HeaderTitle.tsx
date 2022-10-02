import React from "react";

type IHeaderTitle = {
  title: String;
};
const HeaderTitle = (props: IHeaderTitle) => (
  <div className="title_main">
    <h2 className="text-xl mt-2"> {props.title}</h2>
  </div>
);

export { HeaderTitle };
