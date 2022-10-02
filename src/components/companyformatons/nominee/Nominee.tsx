
import React from 'react'
import { Submit } from '../../../shares/components/button/Submit'
import { HeaderTitle } from '../../../shares/components/title/HeaderTitle'
import { QuestionsForm } from '../../index/questions/QuestionsForm'
import FeeScheduleNominee from './FeeSchedule'
import Nomineeinformation from './Nomineeinformation'
import NomineeNotes from './NomineeNotes'
import NomineeServiceWork from './ServiceWork'
import Overview from './Overview'



function Nominee() {
  return (
    <div className='bg-white'>
        <div className='pt-10 container mx-auto'>
        <HeaderTitle title={"Nominee"}></HeaderTitle>
        <div className='grid grid-cols-2 pt-5 gap-10'>
          <div>
            <Overview title={"Features of Nominee Service"} desc={"A Nominee service is a legal way of protecting the identity and anonymity of the company owner. The main function of nominee directors or shareholders is to maintain the anonymity of the real owner by taking their place in all public records relating to the company and non-governmental bodies."}/>
          </div>
          <div className='bg-fees p-8'>
            <QuestionsForm />
          </div>
        </div>
        <div className='pt-10'>
          <Nomineeinformation />
        </div>
        <div className='pt-10'>
          <NomineeServiceWork Icon3={"/share/icon-receive.png"}  Icon1={"/share/icon-provide.png"} Icon2={"/share/icon-finish.png"}
          title={"How does nominee service work?"}
          text1={"Choose the services you need. Provide information of the company’s beneficial owner (a scanned copy of their passport and proof of their address)."} 
          text2={"Pay for the services you have ordered."}
          text3={"We will appoint a nominee, and provide the nominee’s Know Your Client (KYC) documents (scanned copy of passport and proof of address), Declaration of Trust (DOT) and Power of Attorney (POA), if you need these. These documents can be Public Notary or Apostille base on your order."}
          />
          <NomineeNotes />
        </div>
        <div className='pt-10'>
          <FeeScheduleNominee />
          <NomineeNotes />
        </div>
        </div>
      <div className='flex justify-center items-center pt-5'>
        <Submit title={"Set Up With Nominee"} width={250} />
      </div>
    </div>
  )
}

export default Nominee