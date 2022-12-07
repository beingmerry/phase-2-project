import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// Need to bring Zoos to here as prop to build the SELECTOR of the ZOO to send to
const AnimalCard = ({ animal }) => {
  //  debugger // ⚠️ this card seems to be getting called 2x as many as needed
  const { image, name, details, id, isInZoo } = animal
  const [inZoo, setInZoo] = useState(isInZoo)

  const handleInZoo = () => {
    if (!inZoo) {
      fetch(`http://localhost:4000/animals/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(() => {
          // fetch(`http://localhost:4000/zoos/${currentDestinationId}/animals`, {
          //   method: 'PATCH',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify({...animal, inZoo: true })
          // })
          //  .then(res => res.json())
          //  .then(() => {
          //     setInZoo(false)
          //   })
          
          // })
          setInZoo(true)
        })
        .catch(err => console.error(err))
    } else {
      // 🎯
      console.log(inZoo)
      fetch(`http://localhost:4000/animals/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(() => {
          setInZoo(true)
        })
        .catch(err => console.error(err))
    }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ maxHeight: 180 }} variant='top' src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <div className='mb-2'>
          <Button variant='secondary' onClick={handleInZoo} size='sm'>
            {inZoo ? 'Remove' : 'Add to Zoo'}
          </Button>
        </div>
        {/* Another button or selector for which zoo it should go to, populated by zoos */}
      </Card.Body>
    </Card>
  )
}

export default AnimalCard
