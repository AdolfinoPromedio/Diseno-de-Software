import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from '../Imagenes/EXT09845.png';
import './MyStyles.css'

export const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Historia" className='tabs-bg'>
        <Container >
          <Row>
            <Col className='tabs-text'>
              Somos Rincon Dulce, una pasteleria familiar fundada el 2002 con el objetivo de llevar dulces de calidad a la mayor cantidad de clientes posibles,
              buscando no solo destacar con esto, si no también a un gran servicio orientado en la cercanía con los usuarios. Tenemos una gran variedad de productos,
              respecto a los dulces, estos van desde dulces chilenos hasta dulces de otras culturas, y no solo eso, ya que de a poco se han ido incorporando productos
              salados de todo tipo, como empanadas. Los invitamos a echar un ojo por la página y encantarse con nuestros ricos postres!!!
            </Col>
            <Col>
              <img
              className="d-block w-100"
              src={img3}
              alt="First tab photo"
              />
            </Col>
          </Row>
        </Container>
      </Tab>
      
      <Tab eventKey="profile" title="Productos">
      <Container >
          <Row>
            <Col className='tabs-text'>
              Somos Rincon Dulce, una pasteleria familiar fundada el 2002 con el objetivo de llevar dulces de calidad a la mayor cantidad de clientes posibles,
              buscando no solo destacar con esto, si no también a un gran servicio orientado en la cercanía con los usuarios. Tenemos una gran variedad de productos,
              respecto a los dulces, estos van desde dulces chilenos hasta dulces de otras culturas, y no solo eso, ya que de a poco se han ido incorporando productos
              salados de todo tipo, como empanadas. Los invitamos a echar un ojo por la página y encantarse con nuestros ricos postres!!!
            </Col>
            <Col>
              <img
              className="d-block w-100"
              src={img3}
              alt="First tab photo"
              />
            </Col>
          </Row>
        </Container>
      </Tab>

      <Tab eventKey="longer-tab" title="Trabaja con nosotros">
      <Container >
          <Row>
            <Col className='tabs-text'>
              Somos Rincon Dulce, una pasteleria familiar fundada el 2002 con el objetivo de llevar dulces de calidad a la mayor cantidad de clientes posibles,
              buscando no solo destacar con esto, si no también a un gran servicio orientado en la cercanía con los usuarios. Tenemos una gran variedad de productos,
              respecto a los dulces, estos van desde dulces chilenos hasta dulces de otras culturas, y no solo eso, ya que de a poco se han ido incorporando productos
              salados de todo tipo, como empanadas. Los invitamos a echar un ojo por la página y encantarse con nuestros ricos postres!!!
            </Col>
            <Col>
              <img
              className="d-block w-100"
              src={img3}
              alt="First tab photo"
              />
            </Col>
          </Row>
        </Container>
      </Tab>

      <Tab eventKey="contact" title="Contacto" disabled>
      <Container >
          <Row>
            <Col className='tabs-text'>
              Somos Rincon Dulce, una pasteleria familiar fundada el 2002 con el objetivo de llevar dulces de calidad a la mayor cantidad de clientes posibles,
              buscando no solo destacar con esto, si no también a un gran servicio orientado en la cercanía con los usuarios. Tenemos una gran variedad de productos,
              respecto a los dulces, estos van desde dulces chilenos hasta dulces de otras culturas, y no solo eso, ya que de a poco se han ido incorporando productos
              salados de todo tipo, como empanadas. Los invitamos a echar un ojo por la página y encantarse con nuestros ricos postres!!!
            </Col>
            <Col>
              <img
              className="d-block w-100"
              src={img3}
              alt="First tab photo"
              />
            </Col>
          </Row>
        </Container>
      </Tab>

    </Tabs>
  )
};

export default TabsComponent