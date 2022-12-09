import { Button, Card } from 'react-bootstrap'

const ZooAnimalCard = ({ animal, onRemoveFromZoo }) => {
  const { image, name, details } = animal

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ maxHeight: 180 }} variant='top' src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
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
  )
}

export default ZooAnimalCard
