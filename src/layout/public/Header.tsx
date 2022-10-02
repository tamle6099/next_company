/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
const Header = () => {
 
  return (
    <>
      <nav className="container mx-auto">
        <div className="flex flex-wrap items-center container-fluid header-group-menu">
          <div className="bg-boder-right flex flex-wrap items-center pr-4">
            <a>
              <img src="/assets/images/icon-toggle-bar-mobile.svg" alt="" />
            </a>
            <Link href="/">
              <a className="flex items-center">
                <img
                  className="py-3 w-90 logo-header"
                  src="/assets/images/logo.png"
                />
              </a>
            </Link>
          </div>
          <div className="flex py-5 bg-boder-right pl-4">
            <div className=" pointer-events-auto ">
              <img src="/assets/images/icon-search-header.svg" alt="" />
            </div>
            <input
              type="text"
              placeholder="Services, Promotion..."
              className="focus:outline-none"
            />
          </div>
          <div className="bg-boder-right p-5">
            <button type="button" className="flex gap-2">
              <img src="/share/vn.png" alt="" />
              <span className="bg-text-black">VIETNAM</span>
              <img
                src="/share/icon-arrow-up-blue.svg"
                alt=""
                className="mt-2"
              />
            </button>
          </div>
          <div className="bg-boder-right py-5 px-3">
            <button type="button" className="flex gap-2">
              <span className="bg-text-black">VN</span>
              <img
                src="/share/icon-arrow-up-blue.svg"
                alt=""
                className="mt-2"
              />
            </button>
          </div>
          <div className="bg-boder-right py-5 px-3">
            <button type="button" className="flex gap-2">
              <span className="bg-text-black">USD</span>
              <img
                src="/share/icon-arrow-up-blue.svg"
                alt=""
                className="mt-2"
              />
            </button>
          </div>
          <div className="bg-boder-right py-5 px-4">
            <a href="" className="bg-text-black">
              SING IN/SIGN UP
            </a>
          </div>
          <a href="">
            <div className="flex px-4">
              <div className="pt-4">
                <img src="/share/icon-phone-red.png" alt="" />
              </div>
              <div className="pl-3">
                <p className="text-[#CC1F26] text-2xl font-semibold">
                  18006758
                </p>
                <p className="bg-text-black text-sm">Consultant & Support</p>
              </div>
            </div>
          </a>
          <div className="bg-gradient-to-r from-[#EE0979] to-[#FF6A00] py-5 px-6 ">
            <button type="button" className="font-medium text-sm text-white">
              SET UP NOW
            </button>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export { Header };
