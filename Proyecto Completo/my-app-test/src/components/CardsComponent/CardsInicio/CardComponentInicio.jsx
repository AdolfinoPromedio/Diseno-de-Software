import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

import "./card_inicio.css";
import Productos from "../../../pages/Productos";
import {Link} from 'react-router-dom';


function CardComponentInicio({ imageSource, title, id,url}) {
  return (
    <Link to={url}>
        <Card >
          
          <Card.Img  src={imageSource} />
          <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
            <Card.Title><Button className="button-inicio">{title}</Button></Card.Title>
          </div>
       </Card>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardComponentInicio;


