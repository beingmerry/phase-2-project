import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AnimalCard = ({ animal }) => {
  //  debugger // ⚠️ this card seems to be getting called 2x as many as needed
  const { image, name, details, id, isInZoo } = animal;
  const [inZoo, setInZoo] = useState(isInZoo)

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{maxHeight: 180, }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <div className="mb-2">
          <Button variant="secondary" size="sm">
            R E M O V E
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AnimalCard;

