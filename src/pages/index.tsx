import React from "react";
import { AboutUs } from "../components/index/AboutUs";
import { DownLoad } from "../components/index/DownLoad";
import { SlideMain } from "../components/index/SlideMain";
import { News } from "../components/index/News";
import { OneClub } from "../components/index/OneClub";
import { Partnership } from "../components/index/Partnership";
import { Promotion } from "../components/index/Promotion";
import { Questions } from "../components/index/Questions";
import Services from "../components/index/Services";
import { Main } from "../layout/public/Main";
import { Meta } from "../layout/public/Meta";
import { AppConfig } from "../utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <SlideMain></SlideMain>
      <Services></Services>
      <div className="">
        <Promotion></Promotion>
      </div>
      <div className="container mx-auto pt-10">
        <News></News>
      </div>
      <div className="container  mx-auto">
        <Partnership></Partnership>
      </div>
      <div className="pt-10">
        <OneClub></OneClub>
      </div>
      <div className="container    mx-auto">
        <AboutUs></AboutUs>
      </div>
      <div className="pb-10">
        <Questions></Questions>
      </div>
      <div className=" ">
        <DownLoad></DownLoad>
      </div>
    </Main>
  );
};

export default Index;
