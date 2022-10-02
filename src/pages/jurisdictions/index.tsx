import React from "react";
import { AboutUs } from "../../components/index/AboutUs";
import { DownLoad } from "../../components/index/DownLoad";
import { News } from "../../components/index/News";
import { Promotion } from "../../components/index/Promotion";
import Jurisdictions from "../../components/jurisdictions";
import { Main } from "../../layout/public/Main";
import { Meta } from "../../layout/public/Meta";
import { Content } from "../../shares/components/content/Content";
import { AppConfig } from "../../utils/AppConfig";

const Index = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <Content>
      <div className="">
        <Jurisdictions></Jurisdictions>
      </div>
      <div className="container mx-auto">
        <Promotion></Promotion>
      </div>
      <div className="container mx-auto">
        <News></News>
      </div>
      <div className="container mx-auto">
        <AboutUs></AboutUs>
      </div>
      <div className="bg-download">
        <DownLoad></DownLoad>
      </div>
    </Content>
  </Main>
);
export default Index;
