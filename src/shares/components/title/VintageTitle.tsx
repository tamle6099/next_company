import { ViewAll } from "../button/ViewAll";
import { HeaderTitle } from "./HeaderTitle";

type IVintageTitle = {
  title: string;
  icon?: string;
};

const VintageTitle = (props: IVintageTitle) => (
  <div
    className="pt-10 bg-border-bottom"
  >
    <div className="flex pb-4">
      <img src={props.icon} alt="" />
      <div className="pl-3 flex justify-between w-full">
        <HeaderTitle title={props.title} />
        <ViewAll title={"See all"}/>
      </div>
    </div>
  </div>
);

export { VintageTitle };
