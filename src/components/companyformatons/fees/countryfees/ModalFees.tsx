/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >
       <span className=''>
        <img src="/share/icon-feesbook.png" alt="" />
        </span>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none not-sr-only"
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="py-6 pl-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">
                    Hong Kong Private Limited Company Kit
                  </h3>
                  <div className="flex items-center justify-end">
                  <button
                    className="p-px rounded-lg from-[#FF6A00]  to-[#EE0979] bg-gradient-to-r mr-2"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="px-14 py-2 block font-medium text-lg rounded-lg ease-linear duration-150 uppercase bg-white hover:bg-transparent hover:text-white text-[#FF6A00] transition-all"> Download</span>
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold px-4 py-2 text-sm outline-none focus:outline-none mb-4 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   X
                  </button>
                 
                </div>
                </div>
                <div className="">
                <p className="text-sm">Updated time: 31 Oct, 2018, 19:44 (UTC+08:00)</p>
              </div>
                </div>
                <div className="relative px-6 pb-6 flex-auto w-[950px] h-96 overflow-auto touch-auto">
                    <div className="border border-solid border-slate-200 rounded-md w-full ">
                        <div className="">
                        <p className="p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        <p className="border-t border-solid border-slate-200 rounded-b p-3">Business Registration Certificate</p>
                        </div>
                 
                    </div>
                </div>

              </div>
             
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}