import React from 'react'
import { CompanyTitle } from '../jurisdictions/introduce/CompanyTitle'
import ListFees from './countryfees/ListFees'


function Fees() {
  return (
    <div>
        <CompanyTitle 
         title={"Company registration fees. Competitive, Affordable Pricing. Our processing fee is a service fee for accurately completing and ensuring timely compliance with requirements of each local regulations and laws."}
         img="/share/fees.png"
        />
        <div className='pt-10'>
       <ListFees />
        </div>
    </div>
  )
}

export default Fees