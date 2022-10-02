import React from 'react'
import { Submit } from '../../../shares/components/button/Submit'
import { HeaderTitle } from '../../../shares/components/title/HeaderTitle'
import { QuestionsForm } from '../../index/questions/QuestionsForm'
import Overview from '../nominee/Overview'
import ChangeServiceWork from '../nominee/ServiceWork'
import TablesChange from './TablesChange'



function ChangeAgent() {
  return (
    <div className='container mx-auto pt-10'>
      <div className='py-4'>
      <HeaderTitle title={"Change Agent"}/>
      </div>

      <div className='grid grid-cols-2 gap-10'>
        <div>
          <Overview title={"Why change agent?"} desc={"When you first incorporate an offshore company, you start with tax planning and legal matters. This does not mean you will not have any issues in the future. Issues may not just be related to finances, they may relate to supporting, maintaining and advising your company from year to year and dealing with some matters during the life of your business. You have to choose the proper provider or registered agent to serve your offshore structure during its lifetime."}/>
        </div>
        <div className='bg-fees p-8'>
          <QuestionsForm />
        </div>

      </div>
      <div className='py-10'>

      <ChangeServiceWork Icon3={"/share/icon-change-step3.png"}  Icon1={"/share/icon-provide.png"} Icon2={"/share/icon-finish.png"}
          title={"How to change agent?"}
          text1={"Provide us with your current company documents and a resolution (as our checklist required) to change your local agent/secretary company."} 
          text2={"Pay for the services you have ordered."}
          text3={"Details of the new local agent or secretary company will be updated on the government system within 1 to 3 working days, depending on the jurisdiction."}
          />
      </div>
      <div>
      <TablesChange />
      </div>
      <div className='pt-4'>
        <p className='text-base'><strong>Notes:</strong> Services fee is not including outstanding fee which you not yet paid for previous years, penalty, annual fee or other services like Nominee or Annual return - if any.</p>
        <div className='flex justify-center pt-10'>
          <Submit title={"Contact Us"} width={250}/> 
        </div>
      </div>
    </div>
  )
}

export default ChangeAgent