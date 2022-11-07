import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

import "./card_inicio.css"



function CardComponentInicio({  imageSource, title, text, url}) {
  return (
    <div className="text-center">
      <Card   border="dark" style={{width:"20%" ,height:"15%",marginTop:"2%",backgroundColor:"#00000",marginLeft:"auto",marginRight:"auto",flexdirection:"column"}}>
      <Card.Header ><p class="text-center">GeeksforGeeks</p></Card.Header>
      <img class="card-img-top" src={imageSource} alt="Card image" style={{width:"100%" ,height:"60%",marginTop:"0%",marginLeft:"auto",marginRight:"auto",borderRadius:"9px"}}/>
      
       
      
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

export default CardComponentInicio;
