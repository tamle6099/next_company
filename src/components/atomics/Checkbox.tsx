import React from 'react'
import { Switch } from '@headlessui/react'

import { CheckIcon } from '@/assets/icons'

interface Checkbox {
  active: any
  setActive: any
}

const Checkbox: React.FC<Checkbox> = ({ active, setActive }) => {
  return (
    <div className='Checkbox h-6 w-6'>
      <Switch
        checked={active}
        onChange={setActive}
        className={`Checkbox ${
          active
            ? 'border-primary-border bg-primary-main text-white ring-primary-surface'
            : 'border-netral-60 bg-transparent ring-netral-15'
        } relative inline-flex h-5 w-5 items-center rounded-md border ring-2`}
      >
        {active && <CheckIcon className='h-5 w-5' />}
      </Switch>
      <span className='sr-only'>Select All</span>
    </div>
  )
}

export default Checkbox
