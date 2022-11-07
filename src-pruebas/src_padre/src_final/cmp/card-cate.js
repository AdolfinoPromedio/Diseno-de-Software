import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "./card-cate.css";

function Card_cate({ imageSource, title, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      
     <Card style={{width:"20%" ,height:"15%",marginTop:"2%",backgroundColor:"#9b9b9b",marginLeft:"auto",marginRight:"auto",flexdirection:"column" }} >
       <Card.Img src={imageSource} alt="Card image" style={{width:"100%" ,height:"60%",marginTop:"0%",marginLeft:"auto",marginRight:"auto",borderRadius:"9px"}}/>
       
      <Card.ImgOverlay>
      
      <Card.Title >Card title</Card.Title>
      </Card.ImgOverlay>
      </Card> 
    </div>
  );
}

Card_cate.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card_cate;
