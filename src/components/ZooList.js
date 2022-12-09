import React from 'react'
import ZooCard from './ZooCard'
import { Row } from 'react-bootstrap'

const ZooList = ({ zoos, updateZoosWithZoo }) => {
  // List of zoos
  const ZooCards = zoos.map((zoo, index) => {
    return <ZooCard key={index} zoo={zoo} index={index} updateZoosWithZoo={updateZoosWithZoo} />
  })
  return (
    <div>
      <h2>Zoos</h2>
      <Row xs={2} md={3} className='g-4'>
        {ZooCards}
      </Row>
    </div>
  )
}
export default ZooList
