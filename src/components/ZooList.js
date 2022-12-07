import React from 'react'
import ZooCard from './ZooCard'
import { Row } from 'react-bootstrap'

const ZooList = ({ zoos }) => {
  // build unorder list of Zoos from Zoos array
  const ZooCards = zoos.map((zoo, index) => {
    return <ZooCard key={index} zoo={zoo} index={index} />
  })

  return (
    <div>
      <h2>Zoos</h2>
      <Row xs={1} md={2} className='g-4'>
        {ZooCards}
      </Row>
    </div>
  )
}
export default ZooList
