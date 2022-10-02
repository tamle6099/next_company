import React from 'react'
import { data } from '../../../../utils/data'
import { CardCountry } from './CardCountry'

function AsiaPacific() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {data.asians.map((datafile) => (
        <CardCountry key={datafile.slug} {...datafile} />
      ))}
      </div>

  )
}

export default AsiaPacific