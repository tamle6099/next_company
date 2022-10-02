import React from 'react'

function TextSetUp() {
  return (
    <div className='flex pt-5'>
    <div className='w-1/4 px-3'>
        <h1 className='flex justify-center items-center bg-text-blue text-xl font-medium'>Provide Information</h1>
        <div className='pt-5'>
        <p className='text-sm'>Choose a suitable type of entity for your business purpose.</p>
        <p className='text-sm py-2'>Fill in the company names and director/ shareholder(s).</p>
        </div>
    </div>
    <div className='w-1/4 px-3'>
    <h1 className='flex justify-center items-center bg-text-blue text-xl font-medium'>Upload Documents</h1>
    <div className='pt-5'>
    <p className='text-sm'>You are required to upload documents for the verification process, including:</p>
        <ul className='text-sm py-2 list-disc pl-6'>
            <li>Passport of each shareholder / beneficial owner and director. </li>
            <li>Proof of residential address of each director and shareholder in English.</li>
        </ul>
        <p className='text-sm py-2'>Your capital structure and/or your business overview.</p>
    </div>
    </div>
    <div className='w-1/4 px-3'>
    <h1 className='flex justify-center items-center bg-text-blue text-xl font-medium'>Finish Payment</h1>
    <div className='pt-5'>
    <p className='text-sm'>Choose your payment method (We accept Credit/Debit Card, PayPal or Wire Transfer) and pay for your new company.</p>
    </div>
    </div>
    <div className='w-1/4 px-3'>
    <h1 className='flex justify-center items-center bg-text-blue text-xl font-medium'>Receive Company Kit</h1>
    <div className='pt-5'>
    <p className='text-sm'>Your new companys documents will be delivered to your address, including: Certificate of Incorporation, Business Registration, Memorandum and Articles of Association.</p>
    <p className='text-sm py-2'>Your new company is officially ready to do business worldwide!</p>
    </div>
    </div>
</div>
  )
}

export default TextSetUp