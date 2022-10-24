import React from 'react'
import {Container, Nav, Navbar, NavDropdown, Button, Image} from 'react-bootstrap';
import logo from '../images/logo.png';
import './styles.css'

export const NavbarComponent = () => {
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
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Productos</Nav.Link>
              <NavDropdown title="Ubicación" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ubicación 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ubicación 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ubicación 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Redes Sociales" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Facebook</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#cart" style={{ marginRight: 10, fontWeight: 'inherit', fontStyle: 'italic' }}>Carro de Compras</Nav.Link>
            </Nav>
            <Button href="#cart" style={{width: "3rem", height:"3rem"}} variant="outline-primary" className="rounded-circle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent;
