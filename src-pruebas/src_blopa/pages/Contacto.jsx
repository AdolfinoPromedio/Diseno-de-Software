import React from 'react';
import ContactComponent from '../components/ContactComponent';
import ReactDOM from 'react-dom';
import { Form } from 'react-formio';

export const Contacto = () =>{
    return(
        <div>
            <div class="heading">
                <h1>Contáctanos</h1>
            </div>
            <ContactComponent></ContactComponent>
            <Form src="https://maundswywbsqqza.form.io/contactform" />
        </div>
    )
}

export default Contacto;