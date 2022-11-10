import React from 'react';
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../Imagenes/logo.png';
import '../styles/MyStyles.css'

export const FooterComponent = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="50px"
              className="d-inline-block rounded-circle"
            />
          </a>
          <span className="mx-3 ml-4 h5 mb-0" style={{ fontWeight: 'revert', fontStyle: 'italic' }}>Rincón Dulce</span>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Rincón Dulce, 2022. Todos los derechos reservados.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="google" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default FooterComponent;