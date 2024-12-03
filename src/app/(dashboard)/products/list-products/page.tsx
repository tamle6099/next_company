"use client"

import React from "react"
import Image from "next/image"
import { Switch } from "@headlessui/react"

import { Modal, PageAction } from "@/components/moleculs"
import { Alerts, Badge, Button, Checkbox, Title } from "@/components/atomics"

import {
  CheckIcon,
  FunnelIcon,
  PlusIcon,
  SortAscendingIcon
} from "@/assets/icons"

const DBProductsListProducts = () => {
  //----------------------------------------------------------------------------------------//
  const [listProductsData, setListProductsData] = React.useState([
    {
      productName: "T-Men's UA Storm Armour Down 2.0 Jacket",
      productImage: "/list-products/ListProducts-1.png",
      category: "outer",
      status: "active",
      stock: 401,
      price: "$178",
      checked: false
    },
    {
      productName: "Windproof Handbell Oversized Long Coat",
      productImage: "/list-products/ListProducts-2.png",
      category: "outer",
      status: "scheduled",
      stock: 738,
      price: "$178",
      checked: false
    },
    {
      productName: "Women's Stripe Sweater",
      productImage: "/list-products/ListProducts-3.png",
      category: "sweater",
      status: "active",
      stock: 432,
      price: "$178",
      checked: false
    },
    {
      productName: "Women's Turtleneck Sweater",
      productImage: "/list-products/ListProducts-4.png",
      category: "sweater",
      status: "draft",
      stock: 0,
      price: "$178",
      checked: false
    },
    {
      productName: "One Set - Casual Hoodie with Buttons",
      productImage: "/list-products/ListProducts-5.png",
      category: "kids",
      status: "active",
      stock: 334,
      price: "$178",
      checked: false
    }
  ])
  const checkItem = (index: number, checked: boolean) => {
    const newListProductsData = [...listProductsData]
    newListProductsData[index].checked = checked
    setListProductsData(newListProductsData)
  }
  const isSelectAll = React.useMemo(
    () => listProductsData.filter((item) => !item.checked).length === 0,
    [listProductsData]
  )
  const setIsSelectAll = (newIsSelectAll: boolean) => {
    setListProductsData(
      listProductsData.map((item) => ({ ...item, checked: newIsSelectAll }))
    )
  }
  const isSelecting = React.useMemo(
    () => listProductsData.filter((item) => item.checked).length > 0,
    [listProductsData]
  )
  const [openModalDraft, setOpenModalDraft] = React.useState(false)
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openAlertsDraft, setOpenAlertsDraft] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)
  //----------------------------------------------------------------------------------------//

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Products</h1>

      <section className='relative rounded-lg-10 bg-white p-6'>
        <nav className='mb-8 flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Products List
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

            <Button
              size='md'
              variant='primary-bg'
              href='/products/list-products/add'
            >
              <PlusIcon className='h-4 w-4 stroke-white stroke-[4px]' />
              Add Product
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
                  <span className='text-body-sm font-semibold'>Product</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Category</span>
                </th>

                <th className='w-56 whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Status</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Stock</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Price</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {listProductsData.map((item, index) => (
                <tr key={item.productName}>
                  <td className='w-px whitespace-nowrap px-3 py-5 first:pl-5 last:pr-5'>
                    <Checkbox
                      active={item.checked}
                      setActive={(value: boolean) => checkItem(index, value)}
                    />
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='flex items-center gap-3'>
                      <div className='relative h-20 w-20 overflow-hidden rounded-lg-10'>
                        <Image
                          src={item.productImage}
                          className='h-full w-full object-cover'
                          alt='Products'
                          fill
                        />
                      </div>

                      <span className='w-48 whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                        {item.productName}
                      </span>
                    </div>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium capitalize text-netral-80'>
                      {item.category}
                    </span>
                  </td>

                  <td className='w-56 whitespace-pre-wrap px-3 py-5 text-left capitalize first:pl-5 last:pr-5'>
                    {item.status === "active" ? (
                      <Badge variant='success'>{item.status}</Badge>
                    ) : item.status === "scheduled" ? (
                      <Badge variant='info'>{item.status}</Badge>
                    ) : item.status === "draft" ? (
                      <Badge variant='warning'>{item.status}</Badge>
                    ) : null}
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item.stock}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium capitalize text-netral-80'>
                      {item.price}
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

      {/* Page Action */}
      {isSelecting && (
        <PageAction
          variant='sticky'
          actionLabel='2 Product Selected'
          btnPrimaryLabel='Delete'
          btnPrimaryVariant='error-bg'
          btnPrimaryFun={() => setOpenModalDelete(true)}
          btnSecondaryLabel='Draft'
          btnsecondaryVariant='warning-outline'
          btnSecondaryFun={() => setOpenModalDraft(true)}
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
        title='Product has been deleted'
        desc='Product which already deleted can not be recovered.'
      />

      <Modal
        variant='warning'
        open={openModalDraft}
        title='Draft Product'
        className='max-w-lg'
        setOpen={setOpenModalDraft}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to draft this product?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalDraft(false)}
          >
            Cancel
          </Button>
          <Button
            size='md'
            variant='warning-bg'
            onClick={() => {
              setOpenModalDraft(false)
              setOpenAlertsDraft(true)
            }}
          >
            Draft
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='warning'
        open={openAlertsDraft}
        setOpen={setOpenAlertsDraft}
        title='Product drafted'
        desc='Product which already drafted can be recovered.'
      />
    </div>
  )
}

export default DBProductsListProducts
