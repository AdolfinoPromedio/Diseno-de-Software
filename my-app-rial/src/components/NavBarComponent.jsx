import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import logo from '../Imagenes/logo.png';
import './MyStyles.css'
import {Link} from 'react-router-dom';


export const NavBarComponent = () => {
  return (
    
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>

        <Navbar.Brand as={Link} to="/" ><Image src={logo}  roundedCircle  width={80} height={80}/></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <div class="d-flex flex-row">

              <Nav.Link as={Link} to='/'> <div class="navbar-text">Home</div> </Nav.Link>

              <Nav.Link as={Link} to='/Productos'> <div class="navbar-text">Productos</div> </Nav.Link>

              <NavDropdown title="Ubicación" id="basic-nav-dropdown" className='navbar-text'>
                <NavDropdown.Item as={Link} to='/Ubicacion'><div class="navbar-subtext">Ubicación 1</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Ubicacion'><div class="navbar-subtext">Ubicación 2</div></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="Redes" id="basic-nav-dropdown" className='navbar-text'>
                <NavDropdown.Item as={Link} to='/Redes'><div class="navbar-subtext">Redes Sociales 1</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Redes'><div class="navbar-subtext">Redes Sociales 2</div></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </div>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <span className='span-spacing'></span>

          <Button style={{width: "3rem", height:"3rem"}} variant="outline-primary"
            className="rounded-circle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBarComponent;