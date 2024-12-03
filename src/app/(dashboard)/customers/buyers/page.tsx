"use client"

import React from "react"

import { Button, Pagination, Title } from "@/components/atomics"
import { FunnelIcon, SortAscendingIcon } from "@/assets/icons"

/**
 * =======================
 * Dummy Data - Buyers
 * =======================
 */
const buyersData = [
  {
    name: "Samanta Legend",
    email: "samanta@mail.com",
    phoneNumber: "(307) 555-0133",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    lastTransaction: "May 31, 2015"
  },
  {
    name: "Jenny Wilson",
    email: "jenny@mail.com",
    phoneNumber: "(205) 555-0100",
    address: "2715 Ash Dr. San Jose, South Dakota 83475",
    lastTransaction: "October 25, 2019"
  },
  {
    name: "Ronald Richards",
    email: "rrichards@mail.com",
    phoneNumber: "(207) 555-0119",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    lastTransaction: "May 20, 2015"
  },
  {
    name: "Annette Black",
    email: "blackann@mail.com",
    phoneNumber: "(252) 555-0126",
    address: "6391 Elgin St. Celina, Delaware 10299",
    lastTransaction: "August 24, 2013"
  },
  {
    name: "Kristin Watson",
    email: "kristinw@mail.com",
    phoneNumber: "(217) 555-0113",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    lastTransaction: "September 9, 2013"
  },
  {
    name: "Jacob Jones",
    email: "jjones2@mail.com",
    phoneNumber: "(702) 555-0122",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    lastTransaction: "August 2, 2013"
  }
]

const DBCustomersBuyers = () => {
  return (
    <div className='relative p-6 space-y-6'>
      <h1 className='font-semibold text-heading-sm'>Buyers</h1>

      <section className='relative p-6 bg-white rounded-lg-10'>
        {/* Navigation */}
        <nav className='flex items-center justify-between mb-8'>
          <Title size='lg' variant='default'>
            Buyers
          </Title>

          <div className='flex flex-row gap-3'>
            <Button size='md' variant='default-bg'>
              Sort
              <SortAscendingIcon className='w-4 h-4 stroke-2' />
            </Button>
            <Button size='md' variant='default-bg'>
              Filter
              <FunnelIcon className='w-4 h-4 stroke-2' />
            </Button>
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='font-semibold uppercase bg-netral-15 text-body-sm'>
              <tr>
                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Name</span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>
                    Email Adress
                  </span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>
                    Phone Number
                  </span>
                </th>

                <th className='w-56 px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>
                    Complete Adress
                  </span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>
                    Last Transaction
                  </span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='pt-4 text-sm divide-y divide-netral-20'>
              {buyersData.map((item) => (
                <tr key={item.email}>
                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.name}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.email}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.phoneNumber}
                    </span>
                  </td>

                  <td className='w-56 px-3 py-5 text-left whitespace-pre-wrap first:pl-5 last:pr-5'>
                    <span className='font-medium break-words whitespace-pre-wrap  text-body-base text-netral-80'>
                      {item.address}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.lastTransaction}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <Button
                      size='md'
                      variant='primary-nude'
                      href='/customers/buyers/detail'
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

export default DBCustomersBuyers
