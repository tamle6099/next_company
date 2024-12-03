"use client"
import React from "react"
import Image from "next/image"

import { Button, Title } from "@/components/atomics"
import { BagIcon, PackageIcon, TshirtIcon } from "@/assets/icons"

const DashboardNotifications = () => {
  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Notification</h1>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Notifications List
        </Title>

        <section className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h5 className='text-body-sm font-semibold'>December 15, 2022</h5>
            <button className='text-body-sm font-semibold uppercase'>
              Unread
            </button>
          </div>

          <figure className='relative flex items-start gap-5'>
            <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-netral-30/50'>
              <BagIcon className='h-6 w-6 text-netral-80' />
            </div>

            <section className='w-full space-y-6'>
              <div className='w-9/12 space-y-3'>
                <h3 className='text-body-xl font-medium'>New Order</h3>
                <p className='text-body-sm text-netral-60'>
                  There is a new order for {"Women's"} Clothing Azure products
                  in the Outer category with transaction number 20129380132.
                  Please check the details in the column below.
                </p>
              </div>

              <section className='flex w-full items-start justify-between gap-6 overflow-x-auto rounded-lg-10 border border-netral-30 px-3 py-5'>
                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Transaction Number
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    20129380132
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Name
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    Jane Cooper
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Product
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    {"Women's Clothing Azure"}
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Amount
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    22
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Price
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    $300
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <Button variant='primary-nude' size='lg'>
                    View
                  </Button>
                </div>
              </section>
            </section>

            <span className='absolute right-0 top-0'>16.44</span>
          </figure>
        </section>

        <section className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h5 className='text-body-sm font-semibold'>December 15, 2022</h5>
            <button className='text-body-sm font-semibold uppercase text-netral-50'>
              Read
            </button>
          </div>

          <figure className='relative flex items-start gap-5'>
            <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-netral-30/50'>
              <PackageIcon className='h-6 w-6 text-netral-80' />
            </div>

            <section className='w-full space-y-6'>
              <div className='w-9/12 space-y-3'>
                <h3 className='text-body-xl font-medium'>Order Refund</h3>

                <p className='text-body-sm text-netral-60'>
                  There is a product that you want to return with transaction
                  number 2384792384. The reason for the return is because there
                  is a defect in the item sent.{" "}
                </p>
              </div>

              <section className='flex w-full items-start justify-between gap-6 overflow-x-auto rounded-lg-10 border border-netral-30 px-3 py-5'>
                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Transaction Number
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    20129380132
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Name
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    Samantha W
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Product
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    {"Women's Turtleneck Sweater"}
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Order Date
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    October 12, 2022
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Price
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    $300
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <Button variant='primary-nude' size='lg'>
                    View
                  </Button>
                </div>
              </section>
            </section>

            <span className='absolute right-0 top-0'>16.44</span>
          </figure>

          <figure className='relative flex items-start gap-5'>
            <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-netral-30/50'>
              <TshirtIcon className='h-6 w-6 text-netral-80' />
            </div>

            <section className='w-full space-y-6'>
              <div className='w-9/12 space-y-3'>
                <h3 className='text-body-xl font-medium'>Update Stock</h3>

                <p className='text-body-sm text-netral-60'>
                  Update the number of {"T-Men's"} UA Storm Armor Down 2.0
                  Jacket products in the Outer category with an additional 44
                  products.
                </p>
              </div>
              {/* Table */}
              <div className='mb-6 overflow-x-auto'>
                <table className='w-full table-auto'>
                  <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                    <tr>
                      <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Product
                        </span>
                      </th>

                      <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Category
                        </span>
                      </th>

                      <th className='w-56 whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Product Added
                        </span>
                      </th>

                      <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Total Product
                        </span>
                      </th>

                      <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Action
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                    {[1, 2].map((item) => (
                      <tr key={item}>
                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                          <div className='flex items-center gap-3'>
                            <div className='relative h-16 w-16 overflow-hidden rounded-lg-10 2xl:h-20 2xl:w-20'>
                              <Image
                                src={"/products-1.png"}
                                className='h-full w-full object-cover'
                                alt='Products'
                                fill
                              />
                            </div>

                            <span className='w-48 whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                              {"T-Men's UA Storm Armour Down 2.0 Jacket"}
                            </span>
                          </div>
                        </td>

                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                          <span className='text-body-base font-medium text-netral-80'>
                            Outer
                          </span>
                        </td>

                        <td className='w-56 whitespace-pre-wrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                          <span className='text-body-base font-medium text-netral-80'>
                            44
                          </span>
                        </td>

                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                          <span className='text-body-base font-medium text-netral-80'>
                            $178
                          </span>
                        </td>

                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                          <Button
                            size='md'
                            variant='primary-nude'
                            href={"/products/list-products/detail"}
                          >
                            Detail
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <span className='absolute right-0 top-0'>16.44</span>
          </figure>
        </section>
      </section>
    </div>
  )
}

export default DashboardNotifications
