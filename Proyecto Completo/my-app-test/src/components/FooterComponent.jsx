import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../Imagenes/logo.png';
import '../styles/MyStyles.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const FooterComponent = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap sm"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center" className='sm'>
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="50px"
              className="d-inline-block rounded-circle"
            />
          </a>
          <span className="mx-3 ml-4 h5 mb-0 only_font2">Rincón Dulce</span>
        </CDBBox>
        <CDBBox>
          <small className="ml-2 only_font2 sm">&copy; Rincón Dulce, 2022. Todos los derechos reservados.</small>
        </CDBBox>
        <CDBBox display="flex" className='sm'>
          <Container>
            <Row>
              <Col>
                <CDBBtn href='https://www.instagram.com/pasteleria.rincondulce/?hl=es' target='_blank' flat color="dark" className="p-2 sm">
                  <CDBIcon  fab icon="instagram" />
                </CDBBtn>
              </Col>
              <Col>
                <CDBBtn href=' https://wa.me/56983036518' target='_blank' flat color="dark" className="mx-3 p-2 sm">
                  <CDBIcon fab icon="whatsapp" />
                </CDBBtn>
              </Col>
              <Col>
                <CDBBtn href=' https://wa.me/56936816250' target='_blank' flat color="dark" className="p-2 sm">
                  <CDBIcon fab icon="whatsapp" />
                </CDBBtn>
              </Col>
            </Row>
            
            
            
          </Container>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default FooterComponent;