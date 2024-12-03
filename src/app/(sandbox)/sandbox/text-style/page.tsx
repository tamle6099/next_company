import React from 'react'
import { Header } from '@/components/templates'

const page = () => {
  const textStyles = [
    {
      id: 0,
      fontSize: 64,
      lineHeigt: 76,
      name: 'Heading XL',
      className: 'text-heading-xl'
    },
    {
      id: 1,
      fontSize: 46,
      lineHeigt: 54,
      name: 'Heading LG',
      className: 'text-heading-lg'
    },
    {
      id: 2,
      fontSize: 36,
      lineHeigt: 44,
      name: 'Heading MD',
      className: 'text-heading-md'
    },
    {
      id: 3,
      fontSize: 24,
      lineHeigt: 30,
      name: 'Heading SM',
      className: 'text-heading-sm'
    },
    {
      id: 4,
      fontSize: 20,
      lineHeigt: 28,
      name: 'Body XL',
      className: 'text-body-xl'
    },
    {
      id: 5,
      fontSize: 18,
      lineHeigt: 24,
      name: 'Body LG',
      className: 'text-body-lg'
    },
    {
      id: 6,
      fontSize: 16,
      lineHeigt: 22,
      name: 'Body BASE',
      className: 'text-body-base'
    },
    {
      id: 7,
      fontSize: 14,
      lineHeigt: 20,
      name: 'Body SM',
      className: 'text-body-sm'
    },
    {
      id: 8,
      fontSize: 12,
      lineHeigt: 16,
      name: 'Body XS',
      className: 'text-body-xs'
    },
    {
      id: 9,
      fontSize: 10,
      lineHeigt: 14,
      name: 'Body 2XS',
      className: 'text-body-2xs'
    }
  ]

  return (
    <Header title='Text Style'>
      <section className='space-y-8'>
        {textStyles.map((textStyle) => (
          <div
            key={textStyle.id}
            className='flex flex-col items-start gap-4 pb-14'
          >
            <figure className='w-full border-b border-netral-30 pb-4'>
              <figcaption className='text-2xl leading-8 text-netral-50'>
                {textStyle.name ?? 'Heading XL'}
              </figcaption>
            </figure>

            <h1 className={`${textStyle.className} font-bold`}>
              {textStyle.name ?? 'Heading XL'}
            </h1>

            <p className='text-lg text-netral-50'>
              {`Font size : ${textStyle.fontSize}px  |  Line Height : ${textStyle.lineHeigt}px  |  Class : ${textStyle.className}`}
            </p>
          </div>
        ))}
      </section>
    </Header>
  )
}

export default page
