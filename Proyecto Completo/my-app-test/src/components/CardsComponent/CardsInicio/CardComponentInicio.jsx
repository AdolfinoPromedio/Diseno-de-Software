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
          <Card.Title><Button variant="primary">{title}</Button></Card.Title>
          <Card.Img  src={imageSource} />
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


