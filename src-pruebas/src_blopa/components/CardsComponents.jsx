import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import CardComponent from './CardComponent';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import './styles.css'

const cards = [
    {
        id: 1,
        title: 'Productos',
        img: img1,
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 2,
        title: 'Locales',
        img: img2,
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        id: 2,
        title: 'Redes Sociales',
        img: img3,
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
]
export const CardsComponents = () => {
  return (
    <div>
        <div class="heading">
            <h1>Nosotros</h1>
        </div>
        <Row xs={1} md={3} className="g-4">
            {
            cards.map(card => (
                <div className='col-md-3' key={card.id} align-items="center">
                <Col>
                    <CardComponent title={card.title} img={card.img} desc={card.desc}></CardComponent>
                </Col>
                </div>
            ))
            }
        </Row>
    </div>
  )
}

export default CardsComponents;