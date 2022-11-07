import React,{ useState } from "react";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
//import "./card_products.css"

function CardComponentProducts({ imageSource, title,precio, id}) {
  const [count, setCount] = useState(0);
  return (
    
    <Card  style={{width:"20%" ,height:"15%",marginTop:"0.2%",backgroundColor:"#9b9b9b",marginLeft:"auto",marginRight:"auto",flexdirection:"column"}}>
      <Card.Img variant="top" src={imageSource} style={{width:"99%" ,height:"60%",marginTop:"0%",marginLeft:"auto",marginRight:"auto",borderRadius:"9px"}}/>
      <Card.Body style={{width:"100%" ,height:"5%",marginTop:"0%",backgroundColor:"#9b9b9b",marginLeft:"auto"}}>
        <div className="mb-2">
        <Button variant="text" size="lg" disabled>{title}</Button>{' '}
        <Button variant="text" size="lg" disabled>{precio}$ c/u</Button>
      </div>
      <div>
      <Button variant="text" disabled>{count}</Button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          
      </div>
      <Button variant="secondary" size="lg" active>
           Carrito
          </Button>
        </Card.Body>
        
         
          
         
            
        
        
      </Card>
  );
}
export default CardComponentProducts;
