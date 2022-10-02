/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { BankingSolution } from "./services/BankingSolution";
import { Establishment } from "./services/Establishment";
import { LegalCompliance } from "./services/LegalCompliance";
import { WealthManagement } from "./services/WealthManagement";

const Services = () => {
  const [openTab, setOpenTab] = useState(1);
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 620 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <>
      <div
        className={`${
          header
            ? "bg-white  fixed top-[0] z-20 transition-all ease-out duration-500 bg-border-bottom mt-0 w-full"
            : " relative  container mx-auto"
        }  `}
      >
        <div
          className={
            "flex justify-between items-center container mx-auto " +
            (header ? "gap-[0] menu-noscroll " : "gap-[2px] menu-scroll")
          }
        >
          <div
            className={`${
              header ? "bg-block p-[14.5px] bg-boder-x" : "bg-none"
            } `}
          >
            <button type="button" className=" ">
              <img src="/share/icon-menu.svg" alt="" />
            </button>
          </div>
          <div className=" flex-auto text-center">
            <div
              className={
                "text-sm rounded-t-lg  block font-medium leading-normal hover:bg-white  " +
                (openTab === 1
                  ? "text-blue-700 bg-gray-1000"
                  : "bg-navbar text-black")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center hover:bg-gradient-to-r from-[#EE0979] to-[#FF6A00] bg-[length:100%_4px] bg-no-repeat  " +
                  (openTab === 1
                    ? "bg-gradient-to-r from-[#EE0979] to-[#FF6A00] bg-[length:100%_4px] bg-no-repeat "
                    : "") +
                  (header
                    ? "rounded-0 bg-white py-3 bg-boder-right"
                    : "rounded-t-lg py-4")
                }
              >
                <div className="group">
                  <button className="flex justify-center ">
                    <div className="inline-flex items-center group gap-3">
                      <div>
                        <img
                          src="/share/icon-establishment.svg"
                          alt=""
                          className="m-auto"
                        />
                      </div>
                      <span className="text-sm uppercase font-medium">
                        Button Text
                      </span>
                      <span className="duration-100 transform group-hover:rotate-180 ease">
                        <img src="/share/icon-arrow-up-blue.svg" alt="" />
                      </span>
                    </div>
                  </button>
                  <div className="absolute hidden text-gray-700 left-[18.5%] pt-5 group-hover:block z-10">
                    <ul className="border-8 border-blue-600 rounded-lg grid grid-cols-2 bg-white ">
                      <li className="h-32 w-32 text-center hover:bg-gray-400 border-b-2 border-r-2">
                        <a className="block whitespace-no-wrap pt-5 " href="#">
                          <span className="flex items-center justify-center pb-2">
                            <img src="/share/icon-menu-company.svg" alt="" />
                          </span>
                          <span className="pt-4">
                            Company<br></br> Formation
                          </span>
                        </a>
                      </li>
                      <li className="h-32 w-32 text-center hover:bg-gray-400 border-b-2">
                        <a
                          className="block whitespace-no-wrappt pt-5 "
                          href="#"
                        >
                          <span className="flex items-center justify-center pb-2">
                            <img src="/share/icon-menu-nominee.svg" alt="" />
                          </span>
                          <span>Nominee</span>
                        </a>
                      </li>
                      <li className="h-32 w-32 text-center hover:bg-gray-400 border-b-2 border-r-2">
                        <a className="pt-5 block whitespace-no-wrap" href="#">
                          <span className="flex items-center justify-center pb-2">
                            <img src="/share/icon-menu-shelf.svg" alt="" />
                          </span>
                          <span className="">
                            Shelf <br></br> Company
                          </span>
                        </a>
                      </li>
                      <li className="h-32 w-32 text-center hover:bg-gray-400 border-b-2">
                        <a className="pt-5 block whitespace-no-wrap" href="#">
                          <span className="flex items-center justify-center pb-2">
                            <img src="/share/icon-menu-serviced.svg" alt="" />
                          </span>
                          <span className="">
                            Service <br></br>Office
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-auto text-center">
            <a
              className={
                "text-sm rounded-t-lg  block font-medium leading-normal " +
                (openTab === 2
                  ? "text-blue-700 bg-gray-1000"
                  : "bg-navbar text-black")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center items-center  " +
                  (openTab === 2
                    ? "bg-gradient-to-r from-[#9CFFAC] to-[#47BF33] bg-[length:100%_4px] bg-no-repeat "
                    : "") +
                  (header
                    ? "rounded-0 bg-white py-2 bg-boder-right"
                    : "rounded-t-lg py-3")
                }
              >
                <div className="p-1">
                  <img
                    src="/share/icon-bankingsolution.svg"
                    alt=""
                    className="m-auto"
                  />
                </div>
                <div className="text-sm uppercase pl-3">Establishment</div>
              </div>
            </a>
          </div>
          <div className=" flex-auto text-center">
            <a
              className={
                "text-sm rounded-t-lg  block font-medium leading-normal " +
                (openTab === 3
                  ? "text-blue-700 bg-gray-1000"
                  : "bg-navbar text-black")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center items-center  " +
                  (openTab === 3
                    ? "bg-gradient-to-r from-[#0072FF] to-[#00C6FF] bg-[length:100%_4px] bg-no-repeat "
                    : "") +
                  (header
                    ? "rounded-0 bg-white py-2 bg-boder-right"
                    : "rounded-t-lg py-3")
                }
              >
                <div className="p-1">
                  <img
                    src="/share/icon-legalcompliane.svg"
                    alt=""
                    className="m-auto"
                  />
                </div>
                <div className="text-sm uppercase pl-3">Establishment</div>
              </div>
            </a>
          </div>
          <div className=" flex-auto text-center">
            <a
              className={
                "text-sm rounded-t-lg  block font-medium leading-normal " +
                (openTab === 4
                  ? "text-blue-700 bg-gray-1000"
                  : "bg-navbar text-black")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <div
                className={
                  "flex justify-center items-center  " +
                  (openTab === 4
                    ? "bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-[length:100%_4px] bg-no-repeat "
                    : "") +
                  (header ? "rounded-0 bg-white py-2" : "rounded-t-lg py-3")
                }
              >
                <div className="p-1">
                  <img
                    src="/share/icon-wealthmanagement.svg"
                    alt=""
                    className="m-auto"
                  />
                </div>
                <div className="text-sm uppercase pl-3">Establishment</div>
              </div>
            </a>
          </div>
          <div
            className={`${
              header
                ? "bg-gradient-to-r from-[#EE0979] to-[#FF6A00] "
                : "bg-navbar"
            } flex-auto text-center`}
          >
            <div className="p-1">
              <div
                className={`${
                  header ? "py-2" : "bg-download-app py-2"
                } flex justify-center items-center`}
              >
                <div className="">
                  {header ? (
                    <img
                      src="/share/icon-dowload-white.svg"
                      alt=""
                      className="m-auto"
                    />
                  ) : (
                    <img
                      src="/share/icon-download-app.svg"
                      alt=""
                      className="m-auto"
                    />
                  )}
                </div>
                <div
                  className={`${
                    header ? "text-white" : "text-blue-500"
                  } text-sm uppercase pl-3 font-medium`}
                >
                  Download App
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg_header_tabs pt-8">
        <div className=" container m-auto">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl">
            <div className=" flex-auto">
              <div className=" tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Establishment></Establishment>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <BankingSolution></BankingSolution>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <LegalCompliance></LegalCompliance>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <WealthManagement></WealthManagement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
