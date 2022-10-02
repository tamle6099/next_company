import React, { useState } from 'react'
import FeesTables from './FeesTables'
import UnistedAmerica from './UnistedAmerica'

function CountryFees() {
    const [expanded, setExpanded] = useState(false)
  return (
    <>
    <div className='rounded-lg p-5 bg-[#FBFBFB] border '>
    <div className='flex justify-between '>
    <button className='text-lg bg-text-blue ' onClick={() => setExpanded(!expanded)} >
    Hong Kong Country | Starting a business in Hong Kong
    </button>
    <button className='' onClick={() => setExpanded(!expanded)}>
           {expanded ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11.1" width="18" height="1.35" rx="0.674998" fill="#0154B8"/>
          </svg>: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11.1" width="18" height="1.35" rx="0.674998" fill="#0154B8"/>
          <rect x="11.1001" y="3" width="1.35" height="18" rx="0.675" fill="#0154B8"/>
          </svg>}
    </button>
    </div>
    <div className=''>
    {expanded && <div className='mt-5'>
      <div>
        <UnistedAmerica />
      </div>
    </div>} 
    </div>
    </div>
    <div className='rounded-lg p-5 bg-[#FBFBFB] border mt-5'>
    <div className='flex justify-between '>
    <button className='text-lg bg-text-blue ' onClick={() => setExpanded(!expanded)} >
    Hong Kong Country | Starting a business in Hong Kong
    </button>
   
    </div>
    <div className=''>
    {expanded && <div className='mt-5'>
      <div>
        <FeesTables />

      </div>
  
    </div>} 
    </div>
    </div>
    </>
    
  )
}

export default CountryFees