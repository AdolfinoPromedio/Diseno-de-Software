import React,{ useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card_products.css"
function CardComponentProducts({ imageSource, title,precio, id}) {
  const [count, setCount] = useState(0);
  return (
    <Card >
      <Card.Img variant="top" src={imageSource} />
      <Card.Body>
        <Card.Title>{title}: {precio}$</Card.Title>
        
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary"  onClick={() => setCount(count - 1)}>-</button>
          <button type="button" class="btn btn-secondary">{count}</button>
          <button type="button" class="btn btn-secondary"onClick={() => setCount(count + 1)}>+</button>
          <Button variant="primary" size="lg">carrito</Button>
      
        </div>
      </Card.Body>
    </Card>
    

  );
}
export default CardComponentProducts;



        