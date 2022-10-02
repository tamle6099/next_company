import React from "react";
import { HeaderTitle } from "../../shares/components/title/HeaderTitle";


const Jurisdiction = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full bg_header_tabs">
        <div className=" container m-auto">
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
              How To Set Up
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
                Fees
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
               Scope of Service
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
                Recommended Services
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
                Publications
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
               FAQs
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
                Download & Form
              </a>
            </li>
         
          </ul>
        </div>
        <div className="bg-white  pt-8">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl">
            <div className=" flex-auto">
              <div className=" tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className=" container    m-auto">
                    <HeaderTitle title="Offshore Company Formation | Company Incorporation Services"></HeaderTitle>
                    Feature
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                How To Set Up
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                Fees
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                Scope of Service
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                Recommended Services
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                Publications
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                FAQs
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                Download & Form
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jurisdiction;
