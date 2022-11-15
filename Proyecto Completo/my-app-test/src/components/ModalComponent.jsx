import React, { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

/*import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';*/
import SettingsRoundedIcon from '@material-ui/icons/Settings';

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
      <Button color="primary" aria-label="Configuración" style={{width: "3rem", height:"3rem", marginTop:"0px"}} className="d-inline-block rounded-circle">
        <SettingsRoundedIcon onClick={handleShow}/>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Hola! ¿Cómo te llamas?</Modal.Title>
        </Modal.Header>
        <Modal.Body alignItems='center'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="name"
              placeholder="Nombre"
              autoFocus
              onChange={handleChange}
              value={message}
            />
          </Form.Group>
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