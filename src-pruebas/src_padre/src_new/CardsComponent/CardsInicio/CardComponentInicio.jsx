import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import "./card_inicio.css"



function CardComponentInicio({  imageSource, title, text, url}) {
  return (
    < Container>
    <div className="text-center">
      <Card   border="dark" style={{ shadowOpacity: "0",width:"20%" ,height:"15%",marginTop:"2%",backgroundColor:"transparent",marginLeft:"auto",marginRight:"auto",flexdirection:"column"}}>
      <p class="card-text" style={{marginLeft:"%50",marginRight:"%50"}}>{title}</p> 
      <Button>
      <div className='bg-image'>
      <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>Can you see me?</p>
        </div>
      </div>
    </div>
        <img class="card-img-top" src={imageSource} alt="Card image" style={{width:"100%" ,height:"60%",marginTop:"0%",marginLeft:"auto",marginRight:"auto",borderRadius:"9px"}}/>
        <div className='mask' style={{ backgroundColor: 'black' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>Can you see me?</p>
        </div>
        </div>
      </Button>

      </Card> 

    </div>

    </Container>
    
    
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardComponentInicio;
