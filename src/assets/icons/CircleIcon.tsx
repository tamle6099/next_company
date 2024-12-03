import React from 'react'

const CircleIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`circle_icon ${className}`}
      viewBox='0 0 16 16'
      stroke='currentColor'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
        strokeMiterlimit='10'
      />
    </svg>
  )
}

export default CircleIcon
