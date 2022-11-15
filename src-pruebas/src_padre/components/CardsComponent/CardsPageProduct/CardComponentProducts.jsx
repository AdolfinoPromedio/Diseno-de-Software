import React,{ useState } from "react";
import Button from 'react-bootstrap/Button';
import { ButtonGroup,ButtonToolbar } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "./card_products.css"
function CardComponentProducts({ imageSource, title,precio, id}) {
  const [count, setCount] = useState(0);
  return (
    <Card >
      <Card.Img variant="top" src={imageSource} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="text-center">
          <div className="d-inline-block">
          <ButtonToolbar>
            <ButtonGroup className="btn-count-g">
                <Button className="btn-count" onClick={() => setCount(count - 1)}>-</Button>
                <Button className="btn-count">{count}</Button>
                <Button className="btn-count" onClick={() => setCount(count +1)}>+</Button>
              </ButtonGroup>
              
              <ButtonGroup >
                <Button  className="precio-producto" size="lg" variant="primary" >{precio}$</Button>
                <Button href="/Carro" style={{width: "3rem", height:"3rem"}} variant="outline-dark" className="rounded-circle">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </Button>
              </ButtonGroup>
         </ButtonToolbar>

          </div>

        </div>
      
       
       
      </Card.Body>
    </Card>
    

  );
}
export default CardComponentProducts;



        