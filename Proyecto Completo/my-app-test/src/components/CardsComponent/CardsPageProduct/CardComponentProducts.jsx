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
        
          <Button variant="text" disabled>{count}</Button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <Button variant="primary" size="lg">carrito</Button> 
      </Card.Body>
    </Card>
    

  );
}
export default CardComponentProducts;
