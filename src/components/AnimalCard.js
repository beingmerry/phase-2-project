import React, { useState } from 'react'
import {Button, Card, Form} from 'react-bootstrap'


// Need to bring Zoos to here as prop to build the SELECTOR of the ZOO to send to
const AnimalCard = ({ animal, zoos }) => {
  const { image, name, details, id, isInZoo } = animal
  const [inZoo, setInZoo] = useState(isInZoo)
  // 🎯 Identify the current ZOO that the ANIMAL will be sent to
  const [currentDestinationId, setCurrentDestinationId] = useState(0)
  const handleCurrentDestinationId = (event) => {
    // 🎯 Take in the event of selecting the ZOO and set it to the NEW ZOO ID
    console.log(currentDestinationId)
    const destinationId = parseInt(event.target.value)
    setCurrentDestinationId(destinationId)
  }
  const handleInZoo = () => {
    if (!inZoo) {
      // 🎯🎯 Build out TRANSFER Logic (Delete + PATCH) from animal list
      // 🎯 DELETE the ANIMAL from the JSON server object that it is in if it's not in a ZOO
      // https://jasonwatmore.com/post/2021/09/21/fetch-http-delete-request-examples
      fetch(`http://localhost:4000/animals/${id}`, { method: 'DELETE', })
        .then(() => {
          // 🎯 If delete is successful, set the inZoo to true
            fetch(`http://localhost:4000/zoos/${currentDestinationId}/animals`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({...animal, inZoo: true })
          })
           .then(res => res.json())
           .then(() => {
              setInZoo(false)
            })

          })
        .catch(err => console.error(err))
    } else {
      // 🎯 Build out delete Logic from ZOO
      fetch(`http://localhost:4000/animals/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(() => {
          // 🎯 If delete is successful from ZOO remove element from DOM
        })
        .catch(err => console.error(err))
    }
  }
  // at this layer set state
  // inZoo = false
  // [inZoo, setInZ00] = useState(false)
  // if false its only in animal list
  // if true its in the zoo
  // set the state of the animal array to match wether the animal is in the zoo or not
  // if in zoo we can pass props for less details
  // if in zoo we can then add a button to remove
  // if in animal list we have a button to send to zoo
  // in in animal list there is more details
  // //maybe a hover or click to expand those details
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ maxHeight: 180 }} variant='top' src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        {/* 🎯 Add SELECT from React-BootStrap for choosing ZOO 
        https://react-bootstrap.github.io/forms/select/*/}
        {/* If isInZoo is TRUE, do not show form (do no evaluate second statement) */}
        {isInZoo || <Form.Select onChange={handleCurrentDestinationId} aria-label="Default select example">
          {/* Need to modify this for multiple options that may change based on number of zoos... */}
          <option>Open this select menu</option>
          <option value="1">Zoo 1 - San Diego</option>
          <option value="2">Zoo 2 - Columbus</option>
          <option value="3">Zoo 3 - Omaha</option>
        </Form.Select>
        }
        <Button
          className='mb-2'
          onClick={handleInZoo}
          variant='secondary'
          size='sm'
        >
          {isInZoo ? 'Remove from Zoo' : 'Add to Zoo'}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default AnimalCard
