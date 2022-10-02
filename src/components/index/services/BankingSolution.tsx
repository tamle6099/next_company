import React from 'react';

import { VintageTitle } from '../../../shares/components/title/VintageTitle';
import { BankingAccount } from './BankingAccount ';

const BankingSolution = () => (
  <div className=''>
    <div className='bg_bank_box'>
       <VintageTitle
        title="Account Opening Consultancy"
     
        icon="./share/iconUrl.png"
      ></VintageTitle>
      <BankingAccount ></BankingAccount>
    
      <div className="m-auto text-center">
    button
      </div>
    </div>
     
      <div className="columns-2 pt-10">
        <VintageTitle
          title={"Merchant Account"}
        
          icon="./share/iconUrl.png"
        ></VintageTitle>
        <VintageTitle
          title={"Merchant Account"}
     
          icon="./share/iconUrl.png"
        ></VintageTitle>
      </div>
   
  </div>
);

export { BankingSolution };
