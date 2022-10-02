import React from 'react'
import FeesTables from './FeesTables'

function UnistedAmerica() {
  const [openTab, setOpenTab] = React.useState(0);
  return (
    <div className="container mx-auto w-full">
        <div className=" ">
          <ul className="list-none grid grid-cols-5 gap-3" role="tablist">
          <li className={"border flex justify-center cursor-pointer py-4 rounded-md" + (openTab === 1 ? " bg-[#EDFAFD] border-0" : "") }   onClick={(e) => { e.preventDefault(); setOpenTab(1);}}>
              <a className={ "text-base leading-normal " + (openTab === 1 ? " from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent" : "text-[#7FA1CB] ")}
              
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
               Alaska
              </a>
            </li>
            <li className={"border flex justify-center cursor-pointer py-4 rounded-md" + (openTab === 2 ? " bg-[#EDFAFD] border-0" : "") }   onClick={(e) => { e.preventDefault(); setOpenTab(2);}}>
              <a className={ "text-base leading-normal " + (openTab === 2 ? " from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent" : "text-[#7FA1CB] ")}
              
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
               Alaska
              </a>
            </li>
            <li className={"border flex justify-center cursor-pointer py-4 rounded-md" + (openTab === 3 ? " bg-[#EDFAFD] border-0" : "") }   onClick={(e) => { e.preventDefault(); setOpenTab(3);}}>
              <a className={ "text-base leading-normal " + (openTab === 3 ? " from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent" : "text-[#7FA1CB] ")}
              
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
               Alaska
              </a>
            </li>
            <li className={"border flex justify-center cursor-pointer py-4 rounded-md" + (openTab === 4 ? " bg-[#EDFAFD] border-0" : "") }   onClick={(e) => { e.preventDefault(); setOpenTab(4);}}>
              <a className={ "text-base leading-normal " + (openTab === 4 ? " from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent" : "text-[#7FA1CB] ")}
              
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
               Alaska
              </a>
            </li>
            <li className={"border flex justify-center cursor-pointer py-4 rounded-md" + (openTab === 5 ? " bg-[#EDFAFD] border-0" : "") }   onClick={(e) => { e.preventDefault(); setOpenTab(5);}}>
              <a className={ "text-base leading-normal " + (openTab === 5 ? " from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent" : "text-[#7FA1CB] ")}
              
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
               Alaska
              </a>
            </li>

          </ul>
        </div>
       
          <div className="mt-5">
            <div className="relative flex flex-col min-w-0 break-words  w-full rounded-2xl">
              <div className=" flex-auto">
                <div className=" tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <FeesTables />
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    2
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                       3
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                     4
                  </div>
                  <div
                    className={openTab === 5 ? "block" : "hidden"}
                    id="link5"
                  >
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default UnistedAmerica