import React from "react";
import { SubmitGray } from "../../../shares/components/button/SubmitGray";

import { SelectForm } from "../../../shares/components/form/select";
import {data} from"../../../utils/data"
const QuestionsForm = () => (
  <div>
    <div className="register-form">
      <form>
        <div className="form-group mb-3 border-b-[1px] border-[#0154B8]">
          <label className="block">
            <span className=" block text-sm text-slate-700 ">
            Full Name
            </span>
            <input
              type="text"
              name="text"
              className="mt-1 py-2 bg-white font-normal text-base  placeholder-[#0154B8] focus:outline-none focus:border-0 block w-full rounded-md"
              placeholder="Full Name"
            />
          </label>
        </div>
        <div className="columns-2">
        <div className="form-group mt-1  border-b-[1px] border-[#0154B8]">
          <span className=" block text-sm text-slate-700">
          Phone Number
              </span>
            <label className="flex flex-nowrap">
              
              <SelectForm instanceId={"select1"} OptionLIst={data.Country1} ></SelectForm>
              <input
                type="number"
                name="number"
                className="py-2 bg-white placeholder-slate-400 focus:outline-none focus:border-0 block text-base "
                placeholder="e.g 07400 909979984"
              />
             
            </label>
        
          </div>
        <div className="form-group mb-3 border-b-[1px] border-[#0154B8]">
          <label className="block">
            <span className=" block text-sm text-slate-700 ">
            Email Address
            </span>
            <input
              type="text"
              name="text"
              className="mt-1 py-2 bg-white font-normal text-base  placeholder-[#0154B8] focus:outline-none focus:border-0 block w-full rounded-md"
              placeholder="Cor.Dulce586@gmail.com"
            />
          </label>
        </div>
        </div>
        <div className="grid grid-cols-2  gap-5 pt-2">
        <div className="form-group mb-3 grid-cols-2">
            <label className="block border-b-[1px] border-[#0154B8]">
              <span className=" block text-sm text-slate-700">
              Communication Channel
              </span>
              <SelectForm instanceId={"select2"} OptionLIst={data.optionsContry} ></SelectForm>
            </label>
          </div>
          <div className="form-group mb-3 grid-cols-2">
            <label className="block border-b-[1px] border-[#0154B8]">
              <span className=" block text-sm  text-slate-700">
              How did you know about us
              </span>
              <SelectForm instanceId={"select2"} OptionLIst={data.optionsContry} ></SelectForm>
            </label>
          </div>
          </div>
        <div className="grid grid-cols-2 gap-5  ">
          <div className="form-group mb-3 grid-cols-2">
            <label className="block border-b-[1px] border-[#0154B8]">
              <span className=" block text-sm text-slate-700">
              Your Inquiries
              </span>
              <SelectForm instanceId={"select3"} OptionLIst={data.optionsContry} ></SelectForm>
            </label>
          </div>
          <div className="form-group mb-3">
            <label className="block border-b-[1px] border-[#0154B8]">
              <span className=" block text-sm text-slate-700">
              Your Country (Optional)
              </span>
              <SelectForm instanceId={"select4"} OptionLIst={data.optionsTime }></SelectForm>
            </label>
          </div>
        </div>
       
        <div className="form-group mb-3 border-b-[1px] border-[#0154B8]">
          <label className="block">
            <span className=" block text-sm text-slate-700 ">
            Additional Request(s) (Optional)
            </span>
            <input
              type="text"
              name="text"
              className="mt-1 py-2 bg-white font-normal text-base  placeholder-slate-400 focus:outline-none focus:border-0 block w-full rounded-md"
              placeholder="Additional Request(s) (Optional)"
            />
          </label>
        </div>
        <div className="mt-5  text-center">
         <SubmitGray title={"Submit"} width={280} />
        </div>
      </form>
    </div>
  </div>
);

export { QuestionsForm };
