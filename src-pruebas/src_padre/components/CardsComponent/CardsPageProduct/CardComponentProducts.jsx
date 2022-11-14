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
        <Card.Title>{title}: {precio}$</Card.Title>
        <div className="text-center">
          <div className="d-inline-block">
          <ButtonToolbar>
            <ButtonGroup className="btn-count-g">
                <Button className="btn-count" onClick={() => setCount(count - 1)}>-</Button>
                <Button className="btn-count">{count}</Button>
                <Button className="btn-count" onClick={() => setCount(count +1)}>+</Button>
              </ButtonGroup>
              
              <ButtonGroup >
                <Button  variant="primary" size="lg">carrito</Button>
              </ButtonGroup>
         </ButtonToolbar>

          </div>

        </div>
      
       
       
      </Card.Body>
    </Card>
    

  );
}
export default CardComponentProducts;



        