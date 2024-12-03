"use client"

import React from "react"
import { Switch } from "@headlessui/react"

import { Modal, PageAction } from "@/components/moleculs"
import {
  Alerts,
  Button,
  Checkbox,
  Pagination,
  Title
} from "@/components/atomics"

import { CheckIcon, MagnifyingGlassIcon, UserPlusIcon } from "@/assets/icons"

const DBUserRole = () => {
  const [listData, setListData] = React.useState([
    {
      name: "Samanta Legend",
      email: "samanta@mail.com",
      role: "Super Admin",
      phone: "(603) 555-0123",
      date: "May 6, 2012",
      checked: false
    },
    {
      name: "Annette Black",
      email: "annette1@mail.com",
      role: "Admin",
      phone: "(239) 555-0108",
      date: "April 28, 2016",
      checked: false
    },
    {
      name: "Dianne Russell",
      email: "rdianne@mail.com",
      role: "Cashier",
      phone: "(208) 555-0112",
      date: "November 16, 2014",
      checked: false
    },
    {
      name: "Devon Lane",
      email: "delane@mail.com",
      role: "Admin",
      phone: "(219) 555-0114",
      date: "March 23, 2013",
      checked: false
    },
    {
      name: "Marvin McKinney",
      email: "marvin5@mail.com",
      role: "Cashier",
      phone: "(208) 555-0112",
      date: "November 16, 2014",
      checked: false
    },
    {
      name: "Jerome Bell",
      email: "belljer@mail.com",
      role: "Cashier",
      phone: "(704) 555-0127",
      date: "March 23, 2013",
      checked: false
    }
  ])
  const checkItem = (index: number, checked: boolean) => {
    const newListData = [...listData]
    newListData[index].checked = checked
    setListData(newListData)
  }
  const isSelectAll = React.useMemo(
    () => listData.filter((item) => !item.checked).length === 0,
    [listData]
  )
  const setIsSelectAll = (newIsSelectAll: boolean) => {
    setListData(listData.map((item) => ({ ...item, checked: newIsSelectAll })))
  }
  const isSelecting = React.useMemo(
    () => listData.filter((item) => item.checked).length > 0,
    [listData]
  )
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>User Role</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        {/* Navigation */}
        <nav className='space-y-6'>
          <Title size='lg' variant='default'>
            List User Role
          </Title>

          <div className='flex items-center justify-between'>
            <div className='relative w-96'>
              <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-netral-50' />
              <input
                className='w-full rounded-lg border border-transparent bg-netral-20 px-3.5 py-2.5 pl-11  outline-0 ring-2 ring-transparent transition-all duration-300 ease-out focus-within:ring-primary-surface focus:border-primary-main'
                placeholder='Search'
              />
            </div>

            <Button size='md' variant='primary-bg' href='/user-role/add'>
              <UserPlusIcon className='h-5 w-5 fill-white stroke-white stroke-[4px]' />
              Add User Role
            </Button>
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='w-px whitespace-nowrap px-3 py-4 first:pl-5 last:pr-5'>
                  <Checkbox active={isSelectAll} setActive={setIsSelectAll} />
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>User Name</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Email Address
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>User Role</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Phone Number
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Date Ad</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {listData.map((item, index) => (
                <tr key={item.name}>
                  <td className='w-px whitespace-nowrap px-3 py-5 first:pl-5 last:pr-5'>
                    <Checkbox
                      active={item.checked}
                      setActive={(value: boolean) => checkItem(index, value)}
                    />
                  </td>
                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.name}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.email}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.role}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.phone}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.date}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />

        {/* Page Action */}
        {isSelecting && (
          <PageAction
            actionLabel='Last saved'
            actionDesc='Nov 9, 2022-17.09'
            btnPrimaryLabel='Delete'
            btnPrimaryVariant='error-bg'
            btnPrimaryFun={() => setOpenModalDelete(true)}
          />
        )}

        <Modal
          variant='error'
          open={openModalDelete}
          title='Delete User'
          className='max-w-lg'
          setOpen={setOpenModalDelete}
        >
          <main className='mb-10 mt-4'>
            <p className='text-body-base text-netral-80'>
              Are you sure want to delete this user role? User which already
              deleted can not be recovered.
            </p>
          </main>

          <footer className='flex w-full justify-end gap-3'>
            <Button
              size='md'
              variant='default-nude'
              onClick={() => setOpenModalDelete(false)}
            >
              Cancel
            </Button>
            <Button
              size='md'
              variant='error-bg'
              onClick={() => {
                setOpenModalDelete(false)
                setOpenAlertsDelete(true)
              }}
            >
              Submit
            </Button>
          </footer>
        </Modal>

        <Alerts
          variant='error'
          open={openAlertsDelete}
          setOpen={setOpenAlertsDelete}
          title='Users has been deleted'
          desc='User which already deleted can not be recovered.'
        />
      </section>
    </div>
  )
}

export default DBUserRole
