
import React from 'react'

type IOverview = {
  title:string,
  desc:string,
}

function Overview(props: IOverview) {
  return (
    <div className=''>
      <h2 className='text-lg font-medium mb-4'>{props.title}</h2>
      <p className='text-base bg-text-dark'>{props.desc}</p>
    </div>
  )
}

export default Overview