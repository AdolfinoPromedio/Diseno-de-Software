import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import "./card_ctg.css";

function Card_categoria({ imageSource, title, text, url }) {
  return (
    <div>
      <Card className="bg-dark text-dark">
        <Card.Img src={imageSource} alt="Card image" className="card-img-top"/>

            <h5 class="card-title" style={{ color:"black" }}>Card title</h5>
            <p class="card-text">content</p>
            <Button variant="primary">Carrito</Button> 
        
        
         
    </Card>

    </div>
    
     
        
      
    
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card_categoria;
