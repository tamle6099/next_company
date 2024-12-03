"use client"
import React from "react"

import {
  Alerts,
  Button,
  Checkbox,
  Input,
  Selectbox,
  Title,
  Toggle
} from "@/components/atomics"

import { ArrowClockwiseIcon, PlusIcon, TrashIcon } from "@/assets/icons"

import VariantEmptyState from "./empty-state"
import { Modal } from "@/components/moleculs"
import Image from "next/image"
import { DropzoneIll } from "@/assets/illustration"

const DBProductsVariants = () => {
  //--------------------------------------------------------------------------------------
  const [listData, setListData] = React.useState([
    {
      image: "/variants/variant-1.png",
      checked: false,
      show: false
    },
    {
      image: "/variants/variant-2.png",
      checked: false,
      show: false
    },
    {
      image: "/variants/variant-3.png",
      checked: false,
      show: false
    },
    {
      image: "/variants/variant-4.png",
      checked: false,
      show: false
    }
  ])
  //--------------------------------------------------------------------------------------
  const checkItem = (index: number, checked: boolean) => {
    const newListData = [...listData]
    newListData[index].checked = checked
    setListData(newListData)
  }
  const changeShowItem = (index: number, show: boolean) => {
    const newListData = [...listData]
    newListData[index].show = show
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
  const [activeToggle, setActiveToggle] = React.useState(false)
  const [emptyState, setEmptyState] = React.useState(true)
  const [openModalDropzone, setOpenModalDropzone] = React.useState(false)
  //--------------------------------------------------------------------------------------
  const colors = [
    { name: "Select Color" },
    { name: "Grey" },
    { name: "Pink" },
    { name: "Blue" },
    { name: "Green" }
  ]

  const sizes = [
    { name: "Select Size" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" }
  ]
  //--------------------------------------------------------------------------------------
  const [activeState, setActiveState] = React.useState(1)
  const [filledVariant, setFilledVariant] = React.useState(false)
  const [openAlertsSuccess, setOpenAlertsSuccess] = React.useState(false)

  const nextState = () => {
    if (activeState > 1) {
      setOpenModalDropzone(false)

      setTimeout(() => {
        setOpenAlertsSuccess(true)
      }, 500)

      setFilledVariant(true)
      setActiveState(1)
    } else {
      setActiveState(activeState + 1)
    }
  }
  //--------------------------------------------------------------------------------------

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Products</h1>

      <section className='relative rounded-lg-10 bg-white p-6'>
        {/* Navigation */}
        <nav className='mb-8 flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Variants
          </Title>

          <div className='flex flex-row gap-3'>
            {isSelecting && (
              <Button size='md' variant='error-outline'>
                <TrashIcon className='h-4 w-4 stroke-2' />
                Delete Variant
              </Button>
            )}

            <Button
              size='md'
              variant='primary-bg'
              onClick={() => setEmptyState(false)}
            >
              <PlusIcon className='h-4 w-4 stroke-2' />
              Add Variant
            </Button>
          </div>
        </nav>

        {emptyState && (
          <VariantEmptyState action={() => setEmptyState(false)} />
        )}

        {/* Table */}
        {!emptyState && (
          <div className='mb-6 overflow-x-auto'>
            <table className='w-full table-auto'>
              <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                <tr>
                  <th className='w-px whitespace-nowrap px-3 py-4 first:pl-5 last:pr-5'>
                    <Checkbox active={isSelectAll} setActive={setIsSelectAll} />
                  </th>

                  <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                    <span className='text-body-sm font-semibold'>Image</span>
                  </th>

                  <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                    <span className='text-body-sm font-semibold'>Color</span>
                  </th>

                  <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                    <span className='text-body-sm font-semibold'>Size</span>
                  </th>

                  <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                    <span className='text-body-sm font-semibold'>Stock</span>
                  </th>

                  <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                    <span className='text-body-sm font-semibold'>SKU</span>
                  </th>

                  <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                    <span className='text-body-sm font-semibold'>Status</span>
                  </th>

                  <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                    <span className='text-body-sm font-semibold'>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                {listData.map((item, index) => (
                  <tr key={index}>
                    <td className='w-px whitespace-nowrap px-3 py-5 first:pl-5 last:pr-5'>
                      <div className='h-6 w-6'>
                        <Checkbox
                          active={item.checked}
                          setActive={(value: boolean) =>
                            checkItem(index, value)
                          }
                        />
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                      <div className='relative h-20 w-20 overflow-hidden rounded-lg-10'>
                        {!filledVariant ? (
                          <div className='h-full w-full bg-netral-20 object-cover'></div>
                        ) : (
                          <Image
                            src={item.image}
                            className='h-full w-full object-cover'
                            alt='Banner 1'
                            fill
                          />
                        )}
                      </div>
                    </td>

                    <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                      <div className='w-40 2xl:w-56'>
                        <Selectbox
                          datas={colors}
                          selectedNow={filledVariant ? true : false}
                        />
                      </div>
                    </td>

                    <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                      <div className='w-40 2xl:w-56'>
                        <Selectbox
                          datas={sizes}
                          selectedNow={filledVariant ? true : false}
                        />
                      </div>
                    </td>

                    <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                      <Input id='stock' placeholder='0' variant='default' />
                    </td>

                    <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                      <Input id='sku' placeholder='0' variant='default' />
                    </td>

                    <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                      <Toggle
                        enabled={item.show}
                        setEnabled={(value: boolean) =>
                          changeShowItem(index, value)
                        }
                      />
                    </td>

                    <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                      <Button
                        size='md'
                        variant='primary-outline'
                        onClick={() => setOpenModalDropzone(true)}
                      >
                        Add Image
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Modal
        variant='default'
        title='Upload Variant Image'
        open={openModalDropzone}
        setOpen={setOpenModalDropzone}
        className='max-w-4xl'
      >
        {activeState === 1 && (
          <main className='my-10 flex min-h-[360px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-20'>
            <DropzoneIll className='h-32 w-32' />

            <h5 className='mb-1 mt-6 text-body-lg font-semibold'>
              Click to upload, or drag and drop
            </h5>

            <p className='text-body-sm text-netral-50'>
              {"SVG, PNG, JPEG (MAX 800X400px)"}
            </p>
          </main>
        )}

        {activeState === 2 && (
          <main className='my-10 flex min-h-[360px] w-full flex-row flex-wrap items-start justify-start gap-4 rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 p-6'>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className='relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-lg-10'
              >
                <div className='absolute bottom-2.5 right-2.5 z-10 flex flex-row gap-1.5'>
                  <button className='rounded-lg bg-white/50 p-2 outline-none ring-2 ring-transparent transition-all duration-300 ease-out hover:bg-white/75 focus:ring-white/25'>
                    <ArrowClockwiseIcon className='h-5 w-5 text-netral-80' />
                  </button>

                  <button className='rounded-lg bg-white/50 p-2 outline-none ring-2 ring-transparent transition-all duration-300 ease-out hover:bg-white/75 focus:ring-white/25'>
                    <TrashIcon className='h-5 w-5 text-error-main' />
                  </button>
                </div>
                <Image
                  className='h-full w-full object-cover'
                  alt='Image'
                  src={"/outlet-1.jpg"}
                  fill
                />
              </div>
            ))}

            <div className='relative'>
              <label
                htmlFor='dropzone'
                className='relative flex h-40 w-40 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg-10 border-2 border-dashed border-netral-30 transition-all duration-300 ease-out hover:bg-netral-20'
              >
                <PlusIcon className='h-6 w-6 text-netral-50' />

                <h5 className='w-24 text-center text-body-sm font-medium text-netral-50'>
                  Add more images
                </h5>

                <input
                  type='file'
                  id='dropzone'
                  name='dropzone'
                  className='peer hidden cursor-pointer'
                  accept='image/*'
                />
              </label>
            </div>
          </main>
        )}

        <footer className='flex flex-row justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalDropzone(false)}
          >
            Discard
          </Button>

          <Button size='md' variant='primary-bg' onClick={nextState}>
            Save
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openAlertsSuccess}
        setOpen={setOpenAlertsSuccess}
        title='Image has been uploaded'
        desc='You have successfully added an image for your product variant.'
      />
    </div>
  )
}

export default DBProductsVariants
