import React from 'react'

const ArrowLeft2Icon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={`arrow-left-2_icon ${className}`}
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        d='M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08'
      ></path>
    </svg>
  )
}

export default ArrowLeft2Icon
