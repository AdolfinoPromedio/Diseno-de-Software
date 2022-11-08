import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../Imagenes/logo.png';
import '../styles/MyStyles.css'
import {Link} from 'react-router-dom';

export const NavBarComponent = () => {
  return (
    <div className="navbardiv">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
              <img
                  alt=""
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block rounded-circle"
              />{' '}
              <span style={{ marginLeft: 15, fontStyle: 'italic'}}>Rincón Dulce</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to='/'> <div class="navbar-text">Home</div> </Nav.Link>

              <Nav.Link as={Link} to='/Productos'> <div class="navbar-text">Productos</div> </Nav.Link>

              <NavDropdown title="Ubicación" id="basic-nav-dropdown" className='navbar-text'>
                <NavDropdown.Item as={Link} to='/Ubicacion/1'><div class="navbar-subtext">San Miguel</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Ubicacion/2'><div class="navbar-subtext">La Florida</div></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link as={Link} to='/Contacto'> <div class="navbar-text">Contacto</div> </Nav.Link>

              <Nav.Link as={Link} to='/Ordenar'> <div class="navbar-text">Ordenar</div> </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Carro" style={{ marginRight: 10, fontFamily: 'Verdana', fontStyle: 'italic', fontSize: '18px' }}>Carro de Compras</Nav.Link>
            </Nav>
            <Button href="/Carro" style={{width: "3rem", height:"3rem", marginTop:"0px"}} variant="outline-primary" className="rounded-circle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarComponent;