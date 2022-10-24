import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import "./card_inicio.css";

function CardComponentInicio({ imageSource, title, precio, id}) {
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardComponentInicio;
