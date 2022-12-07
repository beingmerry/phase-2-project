import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


// Need to bring Zoos to here as prop to build the SELECTOR of the ZOO to send to
const AnimalCard = ({ animal }) => {
  //  debugger // ⚠️ this card seems to be getting called 2x as many as needed
  const { image, name, details, id, isInZoo } = animal;
  const [inZoo, setInZoo] = useState(isInZoo);

  const handleInZoo = () => {
    if (!inZoo) {
      fetch(`http://localhost:4000/animals/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
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
          setInZoo(true);
        })
        .catch((err) => console.error(err));
    } else {
      // 🎯
      console.log(inZoo);
      fetch(`http://localhost:4000/animals/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          setInZoo(true);
        })
        .catch((err) => console.error(err));
    }
  };
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
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ maxHeight: 180 }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        
        <div className="mb-2">
          <Button variant="outline-info" size="sm">
            Transfer To Omaha Zoo
          </Button>
        </div>

        <div className="mb-2">
          <Button variant="outline-info" size="sm">
            Transfer To San Diego Zoo
          </Button>
        </div>

        <div className="mb-2">
          <Button variant="outline-info" size="sm">
            Transfer To Columbus Zoo
          </Button>
        </div>

        <div className="mb-2">
          <Button variant="secondary" size="sm">
            Remove Animal From Zoo
            </Button>
        </div>

      </Card.Body>
    </Card>
  );
}



export default AnimalCard
