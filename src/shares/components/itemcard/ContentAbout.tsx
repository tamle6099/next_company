import React from "react";


const AboutUs = (infos: any) => (
  <div className="flex mb-1">
    <div className="img w-2/6 mt-1">
      <img src={infos.images} alt="" className="rounde-lg bg-cover" />
    </div>
    <div className="w-4/6 pl-3">
      <div className="h-14">
      <a className="text-sm bg-text-black  font-medium" href="">
        {infos.title}
      </a>
      </div>
      <p className="text-xs bg-text-dark mt-1">{infos.decs}</p>
    </div>
  </div>
);

export { AboutUs };
