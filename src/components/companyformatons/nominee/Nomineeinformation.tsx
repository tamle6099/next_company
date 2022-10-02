/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Nomineeinformation() {
  return (
    <div className='flex gap-10'>
    <div className='w-4/6'>
    <div>
        <h2 className='text-xl font-medium'>Overview</h2>
        <p className='text-base font-medium bg-text-black py-1'>Nominee information</p>
        <p className='text-base bg-text-dark py-1'>We will provide you with a copy of the nominee’s passport and proof of their address.</p>
        <div className='flex pt-5'>
        <div className='w-1/6'>
            <div className=''>
            <img src="/share/icon-nominee-fower.png" alt=""  className='oneibncclud-icon'/>
            </div>
        </div>
        <div className='w-5/6'>
            <h2 className='pb-3 text-lg font-medium'>Power of attorney for nominee director (with apostille)</h2>
            <p className='text-sm bg-text-dark'>Your company’s rights will be protected under a power of attorney. This will certify that you have full control of the company and the nominee director only represents you. All actions made by the nominee director will be taken under this contract until it ends. Then all rights will revert back to you and the nominee can no longer act on your behalf.</p>
        </div>
        </div>
        <div className='flex pt-5'>
        <div className='w-1/6'>
            <div className=''>
            <img src="/share/icon-nominee-fower.png" alt=""  className='oneibncclud-icon'/>
            </div>
        </div>
        <div className='w-5/6'>
            <h2 className='pb-3 text-lg font-medium'>Power of attorney for nominee director (with apostille)</h2>
            <p className='text-sm bg-text-dark'>Your company’s rights will be protected under a power of attorney. This will certify that you have full control of the company and the nominee director only represents you. All actions made by the nominee director will be taken under this contract until it ends. Then all rights will revert back to you and the nominee can no longer act on your behalf.</p>
        </div>
        </div>
    </div>
    </div>
   <div className='w-2/6'>
    <img src="/share/nominee-left.png" alt="" />
   </div>
</div>
    
  )
}

export default Nomineeinformation