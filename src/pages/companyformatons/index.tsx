import React from "react";
import CompanyFormatons from "../../components/companyformatons";
import { FaqsFeature } from "../../components/companyformatons/feature/FAQs";
import ServiceFees from "../../components/companyformatons/jurisdictions/servicefees/ServiceFees";
import { AboutUs } from "../../components/index/AboutUs";
import { DownLoad } from "../../components/index/DownLoad";
import { News } from "../../components/index/News";
import { Promotion } from "../../components/index/Promotion";
import { Main } from "../../layout/public/Main";
import { Meta } from "../../layout/public/Meta";
import { AppConfig } from "../../utils/AppConfig";

const Index = () => (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <div className="">
      <CompanyFormatons></CompanyFormatons>
    </div>
    <div className="container mx-auto">
      <ServiceFees></ServiceFees>
    </div>
    <div className="container mx-auto">
      <FaqsFeature></FaqsFeature>
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
  </Main>
);
export default Index;
