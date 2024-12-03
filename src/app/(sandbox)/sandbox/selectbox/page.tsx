'use client'
import React from 'react'

import { Header } from '@/components/templates'
import { Button, Selectbox } from '@/components/atomics'

const SandboxSelectbox = () => {
  const listMenu = [
    { name: 'Pilih Menu', disabled: true },
    { name: 'Nasi Goreng' },
    { name: 'Ayam Bakar' },
    { name: 'Tahu Tempe' },
    { name: 'Kerang Asin' },
    { name: 'Kopi Hitam' }
  ]

  const [active, setActive] = React.useState(false)

  return (
    <Header title='Selectbox'>
      <div className='space-y-10'>
        <div className='relative w-96'>
          <Selectbox datas={listMenu} selectedNow={active ? true : false} />
        </div>

        <Button
          variant='primary-bg'
          size='md'
          onClick={() => {
            setActive(!active)
          }}
        >
          Active
        </Button>
      </div>
    </Header>
  )
}

export default SandboxSelectbox
