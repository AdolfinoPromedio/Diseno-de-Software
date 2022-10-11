import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react'  

import CardGroup from 'react-bootstrap/CardGroup';

function  Muestraproductos() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://gastronomicainternacional.com/wp-content/uploads/2020/05/tecnicas-de-reposteria-3-1024x576.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://gastronomicainternacional.com/wp-content/uploads/2020/05/tecnicas-de-reposteria-2-1024x576.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://gastronomicainternacional.com/wp-content/uploads/2020/05/tecnicas-de-reposteria-1-1024x576.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  );
}

export default  Muestraproductos;