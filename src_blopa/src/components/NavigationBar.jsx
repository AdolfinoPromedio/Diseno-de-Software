import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo from '../Imagenes/logo.png';

export const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Image src={logo}  roundedCircle  width={80} height={80}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>

            <NavDropdown title="Ubicacion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ubicación 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ubicación 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ubicación 3</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Redes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Redes Sociales 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Redes Sociales 2</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;