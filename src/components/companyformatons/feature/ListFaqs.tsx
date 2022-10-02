import React, { useState } from "react";
type IInfos = {
  id: number;
  title: string;
  desc: string;
};
function ListFaqs(infos: IInfos) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="pt-5">
      <div className="rounded-lg p-5 bg-[#FBFBFB] border mt-5">
        <div className="flex justify-between ">
          <button
            className="text-lg bg-text-blue "
            onClick={() => setExpanded(!expanded)}
          >
            {infos.id} {infos.title}
          </button>
          <button className="" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11.1"
                  width="18"
                  height="1.35"
                  rx="0.674998"
                  fill="#0154B8"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="11.1"
                  width="18"
                  height="1.35"
                  rx="0.674998"
                  fill="#0154B8"
                />
                <rect
                  x="11.1001"
                  y="3"
                  width="1.35"
                  height="18"
                  rx="0.675"
                  fill="#0154B8"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="">
          {expanded && (
            <div className="mt-5">
              <div>
                <div className="text-sm">
                  {infos.desc.split(".").map((desc) => {
                    return <p key={desc}>{desc}</p>;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
  

 
}

export default ListFaqs;
