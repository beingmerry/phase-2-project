import React from 'react'
import ZooCard from './ZooCard'

const ZooList = ({ zoos, specieslist }) => {
  // build unorder list of Zoos from Zoos array
  const ZooCards = zoos.map((zoo, index) => {
    return <ZooCard key={index} zoo={zoo} index={index} />
  })

  return (
    <div>
      <h2>Zoos</h2>
      <ol>
      {ZooCards}
      </ol>
    </div>
  )
}
export default ZooList
