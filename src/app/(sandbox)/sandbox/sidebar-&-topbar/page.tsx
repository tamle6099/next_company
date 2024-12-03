'use client'

import React from 'react'

import { Header } from '@/components/templates'
import { Sidebar, Topbar } from '@/components/organisms'

const page = () => {
  return (
    <Header title='Sidebar & Topbar'>
      <div className='flex w-full items-start'>
        <Sidebar />

        <Topbar />
      </div>
    </Header>
  )
}

export default page
