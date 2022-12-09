import ZooAnimalList from './ZooAnimalList'
import { Card, Col } from 'react-bootstrap'

const ZooCard = ({ zoo, updateZoosWithZoo}) => {
  const { image, name, description, habitat } = zoo

  
  return (
    <Col>
      <Card >
        <Card.Img src={image} alt={name} style={{ width: 'auto' }} />
        <Card.Body>
          <Card.Title>{name} | {habitat}</Card.Title>
          <Card.Text>Description | {description}</Card.Text>
          <Card.Body>
            <ZooAnimalList zoo={zoo} updateZoosWithZoo={updateZoosWithZoo} />
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default ZooCard
