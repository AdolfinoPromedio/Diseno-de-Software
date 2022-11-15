import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../Imagenes/logo.png';
import '../styles/MyStyles.css'
import {Link} from 'react-router-dom';
import ModalComponent from './ModalComponent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

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
            <IconButton href ="/Carro" color="primary" aria-label="Configuración" style={{width: "3rem", height:"3rem", marginTop:"0px"}}>
              <ShoppingCartIcon />
            </IconButton>
            <Nav>
              <ModalComponent></ModalComponent>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarComponent;