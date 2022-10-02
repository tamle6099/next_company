
import React from 'react'
import { Submit } from '../../../shares/components/button/Submit'
import { QuestionsForm } from '../../index/questions/QuestionsForm'
import UnistedAmerica from '../fees/countryfees/UnistedAmerica'
import Overview from '../nominee/Overview'


function CompanyRenewal() {
  return (
    <div className='container mx-auto pt-10'>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <Overview title={"Why change agent?"} desc={"When you first incorporate an offshore company, you start with tax planning and legal matters. This does not mean you will not have any issues in the future. Issues may not just be related to finances, they may relate to supporting, maintaining and advising your company from year to year and dealing with some matters during the life of your business. You have to choose the proper provider or registered agent to serve your offshore structure during its lifetime."}/>
          <div className='pt-5'>
          <Overview title={"Why change agent?"} desc={"When you first incorporate an offshore company, you start with tax planning and legal matters. This does not mean you will not have any issues in the future. Issues may not just be related to finances, they may relate to supporting, maintaining and advising your company from year to year and dealing with some matters during the life of your business. You have to choose the proper provider or registered agent to serve your offshore structure during its lifetime."}/>
          </div>
        </div>
        <div className='bg-fees p-8'>
          <QuestionsForm/></div>
      </div>
      <div>
          <Overview title={"Why change agent?"} desc={"When you first incorporate an offshore company, you start with tax planning and legal matters. This does not mean you will not have any issues in the future. Issues may not just be related to finances, they may relate to supporting, maintaining and advising your company from year to year and dealing with some matters during the life of your business. You have to choose the proper provider or registered agent to serve your offshore structure during its lifetime."}/>
        </div>
        <div className='pt-10'>
         <UnistedAmerica />
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

export default CompanyRenewal