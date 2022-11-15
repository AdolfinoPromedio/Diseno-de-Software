import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import { FormControl, InputLabel, Input, FormHelperText, FormGroup, IconButton } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function ModalComponent() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChange = event => {
    setMessage(event.target.value);
  };
  const handleStorage = () => {
    setShow(false);
    window.location.reload();
    localStorage.setItem("username", JSON.stringify(message));
    message = ""; 
  };

  return (
    <div>
      <IconButton color="primary" aria-label="Configuración" style={{width: "3rem", height:"3rem", marginTop:"0px"}} onClick={handleShow}>
        <SettingsRoundedIcon />
      </IconButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Hola! ¿Cómo te llamas?</Modal.Title>
        </Modal.Header>
        <Modal.Body alignItems='center'>
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="my-input">Nombre</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={handleChange} value={message}/>
                    <FormHelperText id="my-helper-text">Gracias por visitarnos.</FormHelperText>
                </FormControl>
            </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="custom" style={{backgroundColor:"#f3954d", color:"white"}} onClick={handleStorage}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComponent;