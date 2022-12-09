import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

const AnimalCard = ({ animal, zoos, removeFromCurrentAnimals, setZoos }) => {
  const { image, name, details, id } = animal
  const zooAnimal = {
    name: animal.name,
    image: animal.image,
    details: animal.details
  }
  const zooOptions = zoos.map(zoo => {
    return (
      <>
        <option value={zoo.id}>{zoo.name}</option>
      </>
    )
  })

  const [zooId, setZooId] = useState(-1)
  const handleZooId = event => setZooId(parseInt(event.target.value))
  const handleTransferToZoo = () => {
    
    // ⚠️ [zooId - 1] for the array mgmt is hacky and needs fixed ToDo ⚠️ <------------->>
    fetch(`http://localhost:4000/animals/${id}`, { method: 'DELETE' }).then(
      () => {
        fetch(`http://localhost:4000/zoos/${zooId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...zoos[zooId-1],
            animals: [...zoos[zooId-1].animals, zooAnimal]
          })
        })
          .then(res => res.json())
          .then(zooAnimal => {
            removeFromCurrentAnimals(animal)
            setZoos([
              ...zoos,
              {
                ...zoos[zooId-1],
                animals: [...zoos[zooId-1].animals, zooAnimal]
              }
            ])
          })
          .catch(err => console.error(err))
      }
    )
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ maxHeight: 180 }} variant='top' src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Details | {details}</Card.Text>
        <Card.Text>Destination Zoo</Card.Text>
        <Form.Select
          key={id}
          defaultValue={'DEFAULT'}
          onChange={handleZooId}
          aria-label='Default select'
        >
          <option value='DEFAULT' disabled>
            Destination Zoo?
          </option>
          {zooOptions}
        </Form.Select>
        <Button
          disabled={zooId === -1}
          className='mb-2'
          onClick={handleTransferToZoo}
          variant='secondary'
          size='sm'
        >
          Transfer to Zoo
        </Button>
      </Card.Body>
    </Card>
  )
}

export default AnimalCard
