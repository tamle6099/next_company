/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ContentVTV } from "./ContentVTV";

const SliderList = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
  <div className="w-full">
     <div className=" container mx-auto  mt-5">
      <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded-2xl">
        <div className=" flex-auto">
          <div className=" tab-content tab-space">
            <div
              className={openTab === 1 ? "block" : "hidden"}
              id="link1"
            >
            <ContentVTV />
            </div>
            <div
              className={openTab === 2 ? "block" : "hidden"}
              id="link2"
            >
             
            </div>
            <div
              className={openTab === 3 ? "block" : "hidden"}
              id="link3"
            >
              
            </div>
            <div
              className={openTab === 4 ? "block" : "hidden"}
              id="link4"
            >
             
            </div>
          </div>
        </div>
      </div>
    </div>
  <div className=" container mx-auto">
    <ul className="flex mb-0 list-none flex-wrap pt-6  mt-6 flex-row" role="tablist">
      <li className="-mb-px mr-2 last:mr-0 flex-auto">
        <a className={ " px-5 py-3 rounded-lg block leading-normal " + (openTab === 1 ? "bg-shadown-about" : " bg-white")}
          onClick={(e) => { e.preventDefault(); setOpenTab(1);}}
          data-toggle="tab"
          href="#link1"
          role="tablist"
        >
          <div className='flex justify-center p-5'>
               <img src="/share/vtv.png" />
         </div>
        </a>
      </li>
      <li className="-mb-px mr-2 last:mr-0 flex-auto">
        <a
          className={" px-5 py-3 rounded-lg block leading-normal " +(openTab === 2  ? " bg-shadown-about" : " bg-white")}
          onClick={(e) => {e.preventDefault();setOpenTab(2);}}
          data-toggle="tab"
          href="#link2"
          role="tablist"
        >
           <div className='flex justify-center'>
               <img src="/share/thanhnien.png" />
            </div>
        </a>
      </li>
      <li className="-mb-px mr-2 last:mr-0 flex-auto">
        <a className={ " px-5 py-3 rounded-lg block leading-normal " + (openTab === 3 ? "bg-shadown-about" : " bg-white")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          data-toggle="tab"
          href="#link3"
          role="tablist"
        >
          <div className='flex justify-center '>
                <img src="/share/tuoitre.png" />
          </div>
        </a>
      </li>
      <li className="-mb-px mr-2 last:mr-0 flex-auto">
        <a className={ " px-5 py-3 rounded-lg block leading-normal " +(openTab === 4 ? " bg-shadown-about" : " bg-white")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(4);
          }}
          data-toggle="tab"
          href="#link4"
          role="tablist"
        >
           <div className='flex justify-center'>
              <img src="/share/vnexpress.png" />
           </div>
        </a>
      </li>
      <li className="-mb-px mr-2 last:mr-0 flex-auto">
        <a className={ " px-5 py-3 rounded-lg block leading-normal " +(openTab === 5 ? "bg-shadown-about" : " bg-white")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(5);
          }}
          data-toggle="tab"
          href="#link5"
          role="tablist"
        >
          <div className='flex justify-center'>
            <img src="/share/dantri.png" />
           </div>
        </a>
      </li>
      <li className="-mb-px mr-2 last:mr-0 flex-auto">
        <a className={ " px-5 py-3 rounded-lg block leading-normal " +(openTab === 6 ? " bg-shadown-about" : " bg-white")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(6);
          }}
          data-toggle="tab"
          href="#link6"
          role="tablist"
        >
            <div className='flex justify-center'>
             <img src="/share/cafef.png" />
          </div>
        </a>
      </li>
    </ul>
  </div>

   
  
</div>
  )
 
  
}

export { SliderList };
