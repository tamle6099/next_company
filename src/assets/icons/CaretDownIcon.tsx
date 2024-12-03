import React from 'react'

const CaretDownIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`caret-down_icon ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'></path>
    </svg>
  )
}

export default CaretDownIcon
