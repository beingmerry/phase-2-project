import React from 'react'
import ZooAnimalList from './ZooAnimalList'
import { Card, Col } from 'react-bootstrap'
// 🎯 ToDo build out the animals in the zoo logic

const ZooCard = ({ zoo }) => {
  const { image, name, description, id, habitat } = zoo

  // debugger
  return (
    <Col>
      <Card id={id}>
        <Card.Img src={image} alt={name} style={{ width: 'auto' }} />
        <Card.Body>
          <Card.Title>{name} | {habitat}</Card.Title>
          <Card.Text>Description | {description}</Card.Text>
          <Card.Body>
            {/* need zoo for array to update, (only ID?), need animals for  */}
            <ZooAnimalList zoo={zoo} />
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default ZooCard
