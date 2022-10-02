/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Submit } from '../../../../shares/components/button/Submit'
import ModalFees from './ModalFees'

function FeesTables() {
  return (
    <div className='border border-slate-200 rounded-md bg-[#FFFFFF]'>
    <table className='table-auto w-full'>
        <thead className=''>
            <tr className='text-sm  '>
            <th className='border-r border-slate-200 p-[21px]'>Type of Company</th>
            <th className='border-r border-slate-200'>For 1st year</th>
            <th className='border-r border-slate-200'>For year 2+</th>
            <th className='border-r border-slate-200'>Government fee &<br></br> Service charged</th>
            <th className=''>Company Kit</th>
        </tr>
        </thead>
        <tbody className=''>
        <tr className='text-sm border-slate-200 border-t'>
            <td className='border-r border-slate-200 text-start p-3  '><a href="" className='hover:text-[#0154B8] hover:underline bg-text-dark'>Company Limited by Shares (recommend)</a></td>
            <td className='border-r border-slate-200 text-center '>US$ 799</td>
            <td className='border-r border-slate-200 text-center '>US$ 599</td>
            <td className='border-r border-slate-200 text-center '>US$ 277</td>
            <td className=''>
                <div className='flex items-center justify-center gap-5 py-2'>
                <ModalFees />
                <Submit width={130} title={"Order Now"} />
                </div>
            </td>
        </tr>
        </tbody>


    </table>
   
    </div>

  )
}

export default FeesTables