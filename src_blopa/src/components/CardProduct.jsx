import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const CardProduct = props => {
  return (
    <>
    <style type="text/css">
      {`
      .card:hover {
        box-shadow: 5px 10px 20px 1px rgba(255,242,204) !important;
        transition: all 0.7s linear;
      }

      .card-body {
        padding: 2rem 0 !important;
      }

      .card-text {
        padding: 0.3rem 1rem;
        font-size: 1rem;
      }

      .overflow {
        overflow: hidden;
      }

      .card-img-top {
        transform: scale(1);
        transition: all 0.2s ease-in-out;
      }

      .card-img-top:hover {
        transform: scale(1.8);
      }
      `}      
    </style>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageSource} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  );
}

CardProduct.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
  };

export default CardProduct;
