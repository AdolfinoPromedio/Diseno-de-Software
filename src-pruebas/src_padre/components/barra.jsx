import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import logo from './imagenes/logo.png';

function Barra() {
    return (
      
      <Navbar bg="dark" variant="light">
          <Navbar.Brand href="https://rany.tk">
              <Image src={logo}  roundedCircle  width={80} height={80} />
              
              
              
          </Navbar.Brand>
          
          <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Productos</Nav.Link>
                      <NavDropdown title="Ubicación" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ubicación 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Ubicación 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Ubicación 3</NavDropdown.Item>
                        
                        <NavDropdown.Divider />
                        
                      </NavDropdown>
                      <NavDropdown title="Redes Sociales" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Redes Sociales 1</NavDropdown.Item>
                        
                        <NavDropdown.Item href="#action/3.3">Redes Sociales 2</NavDropdown.Item>
                       
                      </NavDropdown>

                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
        
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>

                      
                  </Nav>
            </Navbar.Collapse>
          </Container>



        </Navbar>
    );
  }


  
  export default Barra;