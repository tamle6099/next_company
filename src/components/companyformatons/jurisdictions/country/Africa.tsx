import React from 'react'
import { data } from '../../../../utils/data'
import { CardCountry } from './CardCountry'

function Africa() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {data.africas.map((datafile) => (
        <CardCountry key={datafile.slug} {...datafile} />
      ))}
      </div>
  )
}

export default Africa