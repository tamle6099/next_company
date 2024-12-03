import React from 'react'

const ArrowRight2Icon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={`arrow-right-2_icon ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        d='M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08'
      ></path>
    </svg>
  )
}

export default ArrowRight2Icon
