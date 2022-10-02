import React from "react";

type IInfos = {
  id: number;
  title: string;
  desc: string;
};

function CountrySetupTabs(infos: IInfos) {
  return (
    <div className=" border-2 rounded-lg">
      <div className="p-5 flex items-center border-b-2">
        <h1 className="bg-text-blue font-medium">{infos.title}</h1>
      </div>
      <div>
        <ul className="list-disc p-5 mx-6 text-base">
          
          {infos.desc.split(" , ").map((desc) => {
         
            return (
              <a
                href=""
                key={desc} 
                className="bg-text-dark hover:text-[#0154B8] hover:underline"
              >
                <li className="py-2">{desc}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CountrySetupTabs;
