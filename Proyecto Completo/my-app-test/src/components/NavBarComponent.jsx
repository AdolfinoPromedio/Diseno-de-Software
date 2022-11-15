import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../Imagenes/logo.png';
import '../styles/MyStyles.css'
import {Link} from 'react-router-dom';
import '../index.css'
import '../App.css'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ModalComponent from './ModalComponent';

/*import IconButton from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';*/

export const NavBarComponent = () => {
  return (
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' bg='white'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
              <img
                  alt=""
                  src={logo}
                  width="75"
                  height="75"
                  className="d-inline-block rounded-circle"
              />
              
          </Navbar.Brand>

          <Nav>
              <Nav.Link as={Link} to='/'> 
                <div id='block_container'>
                  <div class='title1-text'>Rincón</div>
                  <div class="title2-text">dulce</div> 
                </div> 
              </Nav.Link>
          </Nav>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"> {<MenuIcon/>} </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to='/'> <div class="navbar-text-style">Home</div> </Nav.Link>

              <NavDropdown title= {<span className="navbar-text-style">Productos</span>} id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link} to='/Productos1'><div class="navbar-subtext">Productos 1</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Productos2'><div class="navbar-subtext">Productos 2</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Productos3'><div class="navbar-subtext">Productos 3</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Productos4'><div class="navbar-subtext">Productos 4</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Productos5'><div class="navbar-subtext">Productos 5</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Productos6'><div class="navbar-subtext">Productos 6</div></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title={<span className="navbar-text-style">Sucursales</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/Ubicacion/1'><div class="navbar-subtext">San Miguel</div></NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Ubicacion/2'><div class="navbar-subtext">La Florida</div></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link as={Link} to='/Contacto'> <div class="navbar-text-style">Contacto</div> </Nav.Link>

              <Nav.Link as={Link} to='/Ordenar'> <div class="navbar-text-style">Ordenar</div> </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link as={Link} to='/Carro'> <div class="navbar-text-style">Carro de compras</div> </Nav.Link>
            </Nav>

            <Button as={Link} to='/Carro' color="primary" aria-label="Configuración" style={{width: "3rem", height:"3rem", marginTop:"0px", marginLeft:"10px", marginRight:"10px"}} className="d-inline-block rounded-circle">
              <ShoppingCartIcon />
            </Button>
            
            <Nav>
              <ModalComponent></ModalComponent>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBarComponent;