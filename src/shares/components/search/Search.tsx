import React from 'react'

function Search() {
  return (
    <div className="container mx-auto mt-4 flex justify-center ">
      <div className='flex justify-center w-10/12'>
        <div className='pt-2 w-[23%]'>
            <p className="">
                <strong style={{fontWeight:"500", fontSize:"18px"}}>Jurisdiction Key Features</strong>
            </p>
        </div>
        <div className="flex w-7/12">
            <div className='w-3/4 pt-1'>
            <select
                name=""
                style={{border:"none", outline:"none", color:"#0154B8", fontSize:"18px", fontWeight:"500"}}
                className="w-full bg-gradient-to-r from-[#0154B8] to-[#0154B8] bg-[length:100%_1px] bg-no-repeat bg-bottom py-2"
            >
                <option value="">Select jurisdiction</option>
                <option value="0">Zalo</option>
                <option value="1">Viber</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
                <option value="2">Yahoo</option>
            </select>
            </div>
            <div className="w-1/4 pl-4">
            <button className="p-px rounded-lg from-[#FF6A00]  to-[#EE0979] bg-gradient-to-r ">
            <span className="px-14 py-2 block font-medium text-lg rounded-lg bg-white hover:bg-transparent hover:text-white text-[#FF6A00] transition">
                Explore</span>
            </button>
            </div>
        </div>
      </div>
  </div>
  )
}

export default Search