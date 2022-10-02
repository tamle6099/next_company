import React from 'react'

function FeeScheduleNominee() {
  return (
    <div>
        <h2 className='text-lg font-medium mb-3'>Fee Schedule of Nominee Service</h2>
    <div className='border border-slate-200 rounded-md bg-[#FFFFFF]'>
    <table className='table-auto w-full'>
        <thead className=''>
            <tr className='text-sm  '>
            <th className='border-r border-slate-200 py-[10px] px-[20px] text-left'>Services</th>
            <th className='border-r border-slate-200'>Service fee</th>
            <th className=''>Description</th>
        </tr>
        </thead>
        <tbody className=''>
        <tr className='text-sm border-slate-200 border-t'>
            <td className='border-r border-slate-200 text-left py-[10px] px-[20px]'>Nominee director</td>
            <td className='border-r border-slate-200 text-center'>US$ 699</td>
            <td className='text-center'></td>
        </tr>
        <tr className='text-sm border-slate-200 border-t'>
            <td className='border-r border-slate-200 text-left py-[10px] px-[20px]'>Power of attorney (POA) documents</td>
            <td className='border-r border-slate-200 text-center'>US$ 499</td>
            <td className='text-center'>Nominee director’s signature only</td>
        </tr>
        <tr className='text-sm border-slate-200 border-t'>
            <td className='border-r border-slate-200 text-left py-[10px] px-[20px]'>Power of attorney with certification by public notary</td>
            <td className='border-r border-slate-200 text-center'>US$ 699</td>
            <td className='text-center'>Certification by notary of detail documents of POA</td>
        </tr>
        <tr className='text-sm border-slate-200 border-t'>
            <td className='border-r border-slate-200 text-left py-[10px] px-[20px]'>Declaration of trust (DOT) with certification by public notary</td>
            <td className='border-r border-slate-200 text-center'>US$ 699</td>
            <td className='text-center'>Certification by notary of detail documents of DOT</td>
        </tr>
        <tr className='text-sm border-slate-200 border-t'>
            <td className='border-r border-slate-200 text-left py-[10px] px-[20px]'>Power of attorney (POA) with apostille documents</td>
            <td className='border-r border-slate-200 text-center'>US$ 699</td>
            <td className='text-center'>Certification on documents by General Registry/Court</td>
        </tr>
        </tbody>


    </table>
   
    </div>
    </div>
  )
}

export default FeeScheduleNominee