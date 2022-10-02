import React from 'react'
import America from './America';
import AsiaPacific from './AsiaPacific';
import Caribbean from './Caribbean';
import Europe from './Europe';
import MiddleEast from './MiddleEast';
import Africa from './Africa';

function ListJurisdictions() {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
         <div className="container mx-auto flex gap-10 w-full pt-10">
        <div className="w-1/5 rounded-sm ">
          <ul className="py-2 rounded-lg list-none bg-[#EDFAFD]" role="tablist">
            <li className="">
              <a className={ "text-base px-8 my-5 block font-medium leading-normal " + (openTab === 1 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
                onClick={(e) => { e.preventDefault(); setOpenTab(1);}}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Asia Pacific (7)
              </a>
            </li>
            <li className="">
              <a className={ "text-base px-8 my-5 block font-medium leading-normal " + (openTab === 2 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
                onClick={(e) => { e.preventDefault(); setOpenTab(2);}}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Europe (8)
              </a>
            </li>
            <li className="">
              <a className={ "text-base px-8 my-5 block font-medium leading-normal " + (openTab === 3 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
                onClick={(e) => { e.preventDefault(); setOpenTab(3);}}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Caribbean (8)
              </a>
            </li>
            <li className="">
              <a className={ "text-base px-8 my-5 block font-medium leading-normal " + (openTab === 4 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
                onClick={(e) => { e.preventDefault(); setOpenTab(4);}}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Middle East (1)
              </a>
            </li>
            <li className="">
              <a className={ "text-base px-8 my-5 block font-medium leading-normal " + (openTab === 5 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
                onClick={(e) => { e.preventDefault(); setOpenTab(5);}}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              > 
                Africa (2)
              </a>
            </li>
            <li className="">
              <a className={ "text-base px-8 my-5 block font-medium leading-normal " + (openTab === 6 ? "from-[#00C6FF]  to-[#0072FF] bg-gradient-to-r bg-clip-text text-transparent  border-l-2 border-l-[#00C6FF] rounded-[0.5px] " : "text-[#7FA1CB]")}
                onClick={(e) => { e.preventDefault(); setOpenTab(6);}}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                America (2)
              </a>
            </li>
          </ul>
        </div>
        <div className="w-4/5">
          <div className=" container  m-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full rounded-2xl">
              <div className=" flex-auto">
                <div className=" tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                 <AsiaPacific />
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <Europe />
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                      <Caribbean />
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                    <MiddleEast />
                  </div>
                  <div
                    className={openTab === 5 ? "block" : "hidden"}
                    id="link5"
                  >
                    <Africa />
                  </div>
                  <div
                    className={openTab === 6 ? "block" : "hidden"}
                    id="link6"
                  >
                     <America />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListJurisdictions