import React, { Component } from 'react'  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponentInicio from './CardComponentInicio';

const title="Categoria Producto";
const cards = [
  {
    id: 1,
    title: "Categoria Producto",
    precio:1,
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-2-1024x681.jpg",
  },
  {
    id: 2,
    title: "Categoria Producto",
   
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },
  {
    id: 3,
    title: "Categoria Producto",
    precio:1,
    image: "https://gastronomicainternacional.com/wp-content/uploads/2020/04/reposteria-2-1.jpg",
  },
  
];

function ShowCardsCategory() {
  return (
    <div>
      <Container style={{}}>
       <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 16}).map((_, idx) => (
        <Col style={{borderColor:"black"}}>
            <h1>1</h1>
        </Col>
      ))}
    </Row>
      
    </Container>

    </div>
    


    
  );
}

export default ShowCardsCategory;



