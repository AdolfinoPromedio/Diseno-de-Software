import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../Imagenes/Ordenar/atencion-terraza.jpg'
import img2 from '../Imagenes/Ordenar/cornershop.jpg'
import img3 from '../Imagenes/Ordenar/delivery-o-retiro.jpg'
import img4 from '../Imagenes/Ordenar/pedidos-ya.jpg'
import img5 from '../Imagenes/Ordenar/uber-eat.jpg'
import img6 from '../Imagenes/Ordenar/rappi.png'
import {Link} from 'react-router-dom';

export const OrderComponent = () => {
  return (
    <Container>
        <Row>
            <Col lg>
                <Link to="/Contacto">
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Link>
            </Col>
            <Col lg>
                <a href='https://web.cornershopapp.com/store/5852/featured' target='_blank'>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                    />
                </a>
            </Col>
            <Col lg>
            <Link to="/Contacto">
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                        
                    />
                </Link>
            </Col>
            
        </Row>
        <Row style={{ marginTop: 5 }}>
            <Col lg>
                <a href='https://www.pedidosya.cl/restaurantes/santiago/el-rincon-dulce-san-miguel-menu/info' target='_blank'>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                </a>
            </Col>
            <Col lg>
                <a href='https://www.ubereats.com/cl/store/el-rincon-dulce/aRy9_DcMQZG5bYm3FQyNdQ' target='_blank'>
                    <img
                        className="d-block w-100"
                        src={img6}
                        alt="First slide"
                    />
                </a>
            </Col>
            <Col lg>
                <a href='https://www.rappi.cl/santiago-de-chile/restaurantes/delivery/20066-el-rincon-dulce-la-florida' target='_blank'>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="First slide"
                    />
                </a>
            </Col>
        </Row>
    </Container>
  )
}

export default OrderComponent;