'use client'

import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, CaretDownIcon } from '@/assets/icons'

// ------------------------------------------------
/**
 * Data Example
 * First as the label
const datas = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' }
]
 */
interface Selectbox {
  className?: string
  datas: any
  label?: string
  selectedNow?: boolean
  variant?: 'default' | 'status' | 'no-border'
}

const Selectbox: React.FC<Selectbox> = ({
  datas,
  label,
  selectedNow = false,
  variant = 'default',
  className
}) => {
  const [selected, setSelected] = useState(datas[0])
  const [selectedNowState, setSelectedNowState] = useState(selectedNow)
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1 w-full space-y-1.5'>
        {label && (
          <h5 className='text-body-base font-semibold text-netral-100'>
            {label}
          </h5>
        )}

        <Listbox.Button
          className={`relative w-full cursor-pointer rounded-lg border bg-white ${
            variant === 'default' ? 'px-4 py-3' : 'p-2 pr-4'
          } ring-2 ring-transparent placeholder:text-netral-50 focus:border-primary-main focus:outline-none focus:ring-primary-surface/50 ${className}`}
        >
          {selectedNowState && (
            <button
              onClick={() => setSelectedNowState(false)}
              className='absolute inset-0 z-10 h-full w-full'
            >
              &nbsp;
            </button>
          )}

          {variant === 'default' && (
            <>
              <span
                className={`block truncate text-left text-body-base text-netral-80`}
              >
                {selectedNowState ? datas[1].name : selected.name}
              </span>
            </>
          )}

          {variant === 'status' && (
            <>
              <div className='flex w-fit flex-row items-center gap-2 rounded-full bg-netral-20 px-2 py-1.5'>
                <span
                  className={`h-5 w-5 rounded-full ${
                    selected.color || 'bg-netral-80'
                  }`}
                />

                <span
                  className={`block truncate text-left text-body-sm text-netral-80`}
                >
                  {selected.name}
                </span>
              </div>
            </>
          )}

          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
            <CaretDownIcon
              className='h-5 w-5 text-netral-50'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter='transition duration-300 ease-out'
          enterFrom='transform scale-y-95 opacity-0'
          enterTo='transform scale-y-100 opacity-100'
          leave='transition duration-300 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <Listbox.Options className='absolute z-[999] mt-1 max-h-60 w-full overflow-auto rounded-md border border-netral-30 bg-white py-1 text-body-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {datas.map((data: any, dataIdx: any) => (
              <Listbox.Option
                key={dataIdx}
                disabled={data.disabled}
                className={({ active }) =>
                  `relative select-none px-4 py-2 ${
                    active && !data.disabled
                      ? 'bg-primary-surface/50'
                      : `text-netral-60`
                  } ${data.disabled ? 'cursor-default' : 'cursor-pointer'}`
                }
                value={data}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected && !data.disabled
                          ? 'font-medium'
                          : 'font-normal'
                      } `}
                    >
                      {data.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
export default Selectbox
