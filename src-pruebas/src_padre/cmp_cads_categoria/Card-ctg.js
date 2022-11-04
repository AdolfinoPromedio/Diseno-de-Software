import React from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import "./card_ctg.css";

function Card_categoria({ imageSource, title, text, url }) {
  return (
    <Card className="bg-dark text-dark">


          <Card.Img src={imageSource} alt="Card image" className="card-img-top"/>

          <Card.ImgOverlay>
           <h5 className="card-title">{title}</h5>
            
            <a
              href={url ? url : "#!"}
              target="_blank"
              className="btn btn-outline-secondary border-0"
              rel="noreferrer"
            >
              {title}
            </a>
          </Card.ImgOverlay>     



          
    </Card>
     
        
      
    
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card_categoria;
