"use client"

import React from "react"

import { Button, Checkbox, Pagination, Title } from "@/components/atomics"

import { MagnifyingGlassIcon, StoreFrontIcon } from "@/assets/icons"

const DBOutlets = () => {
  // ------------------------------------------------------------------------------//
  const [listData, setListData] = React.useState([
    {
      name: "Brand Here Delaware",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      phone: "(603) 555-0123",
      managerBranch: "Arlene McCoy",
      totalTransaction: "$5392",
      checked: false
    },
    {
      name: "Brand Here Kentucky",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      phone: "(684) 555-0102",
      managerBranch: "Courtney Henry",
      totalTransaction: "$7890",
      checked: false
    },
    {
      name: "Brand Here Maine",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      phone: "(480) 555-0103",
      managerBranch: "Jerome Bell",
      totalTransaction: "$6499",
      checked: false
    },
    {
      name: "Brand Here Pennsylvania",
      address: "2464 Royal Ln. Mesa, New Jersey 45463",
      phone: "(704) 555-0127",
      managerBranch: "Kathryn Murphy",
      totalTransaction: "$7239",
      checked: false
    },
    {
      name: "Brand Here Hawaii",
      address: "3891 Ranchview Dr. Richardson, California 62639",
      phone: "(316) 555-0116",
      managerBranch: "Theresa Webb",
      totalTransaction: "$3473",
      checked: false
    },
    {
      name: "Brand Here Connecticut",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      phone: "(808) 555-0111",
      managerBranch: "Floyd Miles",
      totalTransaction: "$7438",
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
  // ------------------------------------------------------------------------------//
  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Outlets</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <nav className='space-y-6'>
          <Title size='lg' variant='default'>
            Outlet List
          </Title>

          <div className='flex items-center justify-between'>
            <div className='relative w-72 2xl:w-96'>
              <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-netral-50' />
              <input
                className='w-full rounded-lg border border-transparent bg-netral-20 px-3.5 py-2 pl-11 outline-0 ring-2 ring-transparent transition-all duration-300 ease-out focus-within:ring-primary-surface focus:border-primary-main 2xl:py-2.5'
                placeholder='Search'
              />
            </div>
            <Button size='md' variant='primary-bg' href='/outlet/add'>
              <StoreFrontIcon className='h-5 w-5 text-white' />
              Add Outlet
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

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Outlet Name
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Outlet Adress
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Outlet Phone Number
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Manager Branch
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Total Transaction
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                  <span className='text-body-sm font-semibold'>Action</span>
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
                      {item.address}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.phone}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.managerBranch}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.totalTransaction}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <Button
                      size='md'
                      variant='primary-nude'
                      href='/outlet/detail'
                    >
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />
      </section>
    </div>
  )
}

export default DBOutlets
