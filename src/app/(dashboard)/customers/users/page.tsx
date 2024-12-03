"use client"
import React from "react"

import { Modal, PageAction } from "@/components/moleculs"
import {
  Alerts,
  Button,
  Checkbox,
  Pagination,
  Title
} from "@/components/atomics"

import { FunnelIcon, SortAscendingIcon } from "@/assets/icons"

const DBCustomersUsers = () => {
  //----------------------------------------------------------------------------------//
  const [usersData, setUsersData] = React.useState([
    {
      name: "Samanta Legend",
      email: "samanta@mail.com",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      createAt: "Orange",
      date: "May 6, 2012",
      checked: false
    },
    {
      name: "Annette Black",
      email: "annette1@mail.com",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      createAt: "Toledo",
      date: "April 28, 2016",
      checked: false
    },
    {
      name: "Dianne Russell",
      email: "rdianne@mail.com",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      createAt: "Naperville",
      date: "November 16, 2014",
      checked: false
    },
    {
      name: "Devon Lane",
      email: "delane@mail.com",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
      createAt: "Fairfield",
      date: "March 23, 2013",
      checked: false
    },
    {
      name: "Marvin McKinney",
      email: "marvin5@mail.com",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      createAt: "Austin",
      date: "November 16, 2014",
      checked: false
    },
    {
      name: "Jerome Bell",
      email: "belljer@mail.com",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      createAt: "Orange",
      date: "March 23, 2013",
      checked: false
    }
  ])
  const checkItem = (index: number, checked: boolean) => {
    const newUsersData = [...usersData]
    newUsersData[index].checked = checked
    setUsersData(newUsersData)
  }
  const isSelectAll = React.useMemo(
    () => usersData.filter((item) => !item.checked).length === 0,
    [usersData]
  )
  const setIsSelectAll = (newIsSelectAll: boolean) => {
    setUsersData(
      usersData.map((item) => ({ ...item, checked: newIsSelectAll }))
    )
  }
  const isSelecting = React.useMemo(
    () => usersData.filter((item) => item.checked).length > 0,
    [usersData]
  )
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)
  //----------------------------------------------------------------------------------//

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Users</h1>

      <section className='relative rounded-lg-10 bg-white p-6'>
        <nav className='mb-8 flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Users
          </Title>

          <div className='flex flex-row gap-3'>
            <Button size='md' variant='default-bg'>
              Sort
              <SortAscendingIcon className='h-4 w-4 stroke-netral-100 stroke-[4px]' />
            </Button>

            <Button size='md' variant='default-bg'>
              Filter
              <FunnelIcon className='h-4 w-4 stroke-netral-100 stroke-[4px]' />
            </Button>
          </div>
        </nav>

        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='w-px whitespace-nowrap px-3 py-4 first:pl-5 last:pr-5'>
                  <Checkbox active={isSelectAll} setActive={setIsSelectAll} />
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Name</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Email Adress
                  </span>
                </th>

                <th className='w-56 whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Complete Adress
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Created At</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Last Activity
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {usersData.map((item, index) => (
                <tr key={item.email}>
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

                  <td className='w-56 whitespace-pre-wrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {item.address}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.createAt}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.date}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <Button
                      size='md'
                      variant='primary-nude'
                      href='/customers/users/detail'
                    >
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
      </section>

      {/* Page Action */}
      {isSelecting && (
        <PageAction
          variant='sticky'
          actionLabel='2 Product Selected'
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
            Are you sure want to delete this user? User which already deleted
            can not be recovered.
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
    </div>
  )
}

export default DBCustomersUsers
