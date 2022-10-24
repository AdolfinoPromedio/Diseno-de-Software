import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './styles.css'

function CardComponent({title, img, desc}){
  return (
    <div className='container d-flex justify-content-center align-items-center'>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
            </Card>
    </div>
  )
}

export default CardComponent;

