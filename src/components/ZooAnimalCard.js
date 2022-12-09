import { Accordion, Button, Card, Col } from 'react-bootstrap'

const ZooAnimalCard = ({ animal, onRemoveFromZoo }) => {
  const { image, name, details } = animal

  return (
    <Col>
      <Card style={{ width: '14rem' }}>
        <Card.Img style={{ maxHeight: 180 }} variant='top' src={image.url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Accordion>
          <Accordion.Item eventKey="0" >
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
              <Card.Text> {details}</Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          <Button
            className='mb-2'
            onClick={() => onRemoveFromZoo(animal)}
            variant='secondary'
            size='sm'
          >
            Remove from Zoo
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ZooAnimalCard
