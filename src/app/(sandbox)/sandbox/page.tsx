import React from 'react'
import Link from 'next/link'

import { Header } from '@/components/templates'

const page = () => {
  const components = [
    {
      id: 0,
      name: 'Text Style',
      link: '/sandbox/text-style'
    },
    {
      id: 1,
      name: 'Button',
      link: '/sandbox/button'
    },
    {
      id: 2,
      name: 'Badge',
      link: '/sandbox/badge'
    },
    {
      id: 3,
      name: 'Title',
      link: '/sandbox/title'
    },
    {
      id: 4,
      name: 'Pagination',
      link: '/sandbox/pagination'
    },
    {
      id: 5,
      name: 'Input',
      link: '/sandbox/input'
    },
    {
      id: 6,
      name: 'Page Action',
      link: '/sandbox/page-action'
    },
    {
      id: 7,
      name: 'Sidebar & Topbar',
      link: '/sandbox/sidebar-&-topbar'
    },
    {
      id: 8,
      name: 'Alerts',
      link: '/sandbox/alerts'
    },
    {
      id: 9,
      name: 'Modal',
      link: '/sandbox/modal'
    },
    {
      id: 10,
      name: 'Selectbox',
      link: '/sandbox/selectbox'
    },
    {
      id: 11,
      name: 'Toggle',
      link: '/sandbox/toggle'
    },
    {
      id: 12,
      name: 'Popover',
      link: '/sandbox/popover'
    }
  ]

  return (
    <>
      <Header title='Components'>
        <ul className='flex flex-wrap items-center gap-4 gap-y-8'>
          {components.map((component) => (
            <li
              key={component.id}
              className='text-xl font-semibold text-netral-80'
            >
              <Link
                className='rounded-full border border-netral-30 px-4 py-2 shadow-sm ring-2 ring-transparent hover:bg-netral-20 focus:ring-netral-40'
                href={component.link}
              >
                {component.name}
              </Link>
            </li>
          ))}
        </ul>
      </Header>
    </>
  )
}

export default page
