import React from "react";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";

import Jurisdiction from "./jurisdictions/Jurisdictions";
import HowToSetUp from "./howtosetups/HowToSetUp";
import Fees from "./fees/Fees";
import FAQs from "./faqs/FAQs";
import DownloadForm from "./downloadform/DownloadForm";
import ChangeAgent from "./changeagent/ChangeAgent";
import CompanyRenewal from "./companyrenewal/CompanyRenewal";
import Nominee from "./nominee/Nominee";

import { TitleMin } from "../../shares/components/title/TitleMin";
import { ViewAll } from "../../shares/components/button/ViewAll";
import { HowWork } from "./feature/HowWork";

import FeatureList from "./feature/FeatureList";
import { Feature } from "./feature/feature";
import { Support } from "./feature/support";

const CompanyFormatons = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full bg_header_tabs">
        <div className=" container  m-auto">
          <ul
            className="flex mb-0 list-none flex-wrap pt-8   flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 1
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Features
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 2
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Jurisdictions
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 3
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                How To Set Up
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 4
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Fees
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 5
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Nominee
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 6
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Change Agent
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 7
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                Company Renewal
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 8
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link8"
                role="tablist"
              >
                FAQs
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-base  px-5 py-3 rounded-t-lg block font-medium leading-normal " +
                  (openTab === 9
                    ? "text-black bg-white"
                    : "text-blueGray-600  bg_header_tabs")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link9"
                role="tablist"
              >
                Download & Form
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl">
            <div className=" flex-auto">
              <div className=" tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" container    m-auto">
                    <div className="mt-8">
                      <HeaderTitle title="Offshore Company Formation | Company Incorporation Services"></HeaderTitle>
                    </div>
                    <Feature></Feature>
                    <Support></Support>
                    <div className=" mb-5">
                      <TitleMin
                        title={
                          "Expand your business to more than 27 jurisdiction around the word with Offshore Company Corp. We are here to assist you in setting up a new company in line with local laws and regulations."
                        }
                      ></TitleMin>
                    </div>
                    <FeatureList></FeatureList>
                    <div className="text-center mt-5 mb-5">
                      <ViewAll title={"View all"}></ViewAll>
                    </div>
                    <HowWork></HowWork>
                 
                    
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Jurisdiction></Jurisdiction>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <HowToSetUp></HowToSetUp>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <Fees></Fees>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <Nominee></Nominee>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <ChangeAgent></ChangeAgent>
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                  <CompanyRenewal></CompanyRenewal>
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                  <FAQs></FAQs>
                </div>
                <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                  <DownloadForm></DownloadForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyFormatons;
