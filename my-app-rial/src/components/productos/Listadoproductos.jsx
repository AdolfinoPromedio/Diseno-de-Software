import React, { Component } from 'react'  


import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from '../components-cards/Card';


const cards = [
  {
    id: 1,
    title: "Nombre Producto",
    
    image: "",
  },
  
];

function ListaGroupsCards() {
  return (
    
    
    <Row xs={3} md={3} className="g-4">
    {Array.from({ length: 6}).map((_, idx) => (
      <Col>
        <div>
          <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {cards.map(({ title, image, url, id }) => (
              <div className="col-md-4" key={id}>
                <Card imageSource={image} title={title} url={url} />
              </div>
            ))}
          </div>
        </div>

        </div>
      </Col>
        ))}
        </Row>


    
  );
}

export default ListaGroupsCards;

