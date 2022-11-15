import React from 'react';
import ContactComponent from '../components/ContactComponent';
import ReactDOM from 'react-dom';
import { Form } from 'react-formio';
import '../styles/MyStyles.css'

export const Contacto = () =>{
    return(
        <div>
            <br />
            <br />
            <br />
            <div class="heading only_font2">
                    <h1>Contacto</h1>
            </div>
            <div>
                <ContactComponent></ContactComponent>
            </div>
        </div>
    )
}

export default Contacto;