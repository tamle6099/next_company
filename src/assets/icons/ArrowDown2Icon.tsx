import React from 'react'

const ArrowDown2Icon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`arrow-down-2_icon ${className}`}
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        d='M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
      ></path>
    </svg>
  )
}

export default ArrowDown2Icon
