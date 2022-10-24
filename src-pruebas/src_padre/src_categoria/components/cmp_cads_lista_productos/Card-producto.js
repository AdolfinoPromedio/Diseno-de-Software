import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card_producto({ imageSource, title,precio, id}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSource} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{precio}</Card.Text>

        <Button variant="primary">carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default card_producto;
