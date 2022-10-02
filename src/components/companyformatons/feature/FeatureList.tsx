import React from 'react'
import { data } from '../../../utils/data'
import { CardCountry } from '../jurisdictions/country/CardCountry'


function FeatureList() {
  return (
    
    <div className="grid grid-cols-4 gap-8">
    {data.caribbs.slice(0,4).map((datafile) => (
      <CardCountry key={datafile.slug} {...datafile} />
    ))}
    </div>
    
  )
}

export default FeatureList