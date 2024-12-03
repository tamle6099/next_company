import React from "react"

import { Badge, Button, Title } from "@/components/atomics"

import { FunnelIcon, PencilSimpleIcon, SortAscendingIcon } from "@/assets/icons"
import Image from "next/image"

const DBCustomersBuyersDetail = () => {
  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Buyers</h1>

      <section className='relative rounded-lg-10 bg-white p-6'>
        <nav className='mb-8 flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Detail Buyer
          </Title>

          <Button
            size='md'
            variant='primary-bg'
            href='/customers/buyers/update'
          >
            <PencilSimpleIcon className='h-4 w-4 stroke-[4px]' />
            Edit
          </Button>
        </nav>

        <section className='flex flex-row items-center gap-5'>
          <div className='relative h-[8.25rem] w-[8.25rem] overflow-hidden rounded-full'>
            <Image
              src={"/avatar-default.png"}
              className='h-full w-full object-cover'
              alt='Avatar'
              fill
            />
          </div>

          <div className='space-y-7'>
            <h3 className='text-heading-sm font-semibold'>Samanta Legend</h3>

            <section className='flex flex-row items-start gap-2.5'>
              <div className='w-72 space-y-1.5'>
                <h5 className='text-body-sm uppercase text-netral-50'>
                  Email Address
                </h5>

                <p className='text-body-base font-medium'>samanta@mail.com</p>
              </div>

              <div className='w-72 space-y-1.5'>
                <h5 className='text-body-sm uppercase text-netral-50'>
                  Phone Number
                </h5>

                <p className='text-body-base font-medium'>(307) 555-0133</p>
              </div>

              <div className='w-72 space-y-1.5'>
                <h5 className='text-body-sm uppercase text-netral-50'>
                  Complete Address
                </h5>

                <p className='text-body-base font-medium'>
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </p>
              </div>
            </section>
          </div>
        </section>
      </section>

      <section className='relative rounded-lg-10 bg-white p-6'>
        <nav className='mb-8 flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Transaction History
          </Title>

          <div className='flex flex-row gap-3'>
            <Button size='md' variant='default-bg'>
              Sort
              <SortAscendingIcon className='h-4 w-4 stroke-2' />
            </Button>
            <Button size='md' variant='default-bg'>
              Filter
              <FunnelIcon className='h-4 w-4 stroke-2' />
            </Button>
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Transaction ID
                  </span>
                </th>

                <th className='w-56 whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Purchased Item
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Amount</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Status</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Total Price
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Transaction Date
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <tr key={item}>
                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      653518
                    </span>
                  </td>

                  <td className='w-56 whitespace-pre-wrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      {"Heimer Miller Sofa (Mint Condition)"}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      3
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className=' text-body-base font-medium text-netral-80'>
                      <Badge variant='success'>Success</Badge>
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      $739.65
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      02 Jan 2022, 16.00
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default DBCustomersBuyersDetail
