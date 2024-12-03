import React from 'react'
import { Switch } from '@headlessui/react'

import { CheckIconBold, XIconBold } from '@/assets/icons'

interface Toggle {
  enabled: any
  setEnabled: any
}

const Toggle: React.FC<Toggle> = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-primary-main' : 'bg-netral-30'
      } relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span
        aria-hidden='true'
        className={`${
          enabled ? 'translate-x-8' : 'translate-x-1'
        } pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />

      {enabled ? (
        <CheckIconBold className='absolute left-2 z-10 h-4 w-4 text-white' />
      ) : (
        <XIconBold className='absolute right-2 z-10 h-4 w-4 text-white' />
      )}
    </Switch>
  )
}

export default Toggle
