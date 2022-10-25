import React from 'react'
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../components/styles/Contact.scss';
import { Form } from 'react-formio';


export const ContactComponent = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Envianos tu pedido o consulta</h3>
                    {/*<div className='card p-3'>
                      <h5 className='card-title'>Formulario</h5>*/}
                    <div className='"card bg-light text-dark"'><Form src={"https://maundswywbsqqza.form.io/contactform"} /*onSubmit={onSubmitHandler}*/ /></div>
                    {/*</div>*/}
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contactanos</h3>
                    <p className="mb-4">
                      Estamos abiertos a sugerencias y a consultas
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Dirección La Florida: </span> Froilan Roa 6703 <br/>
                          <span>Dirección San Miguel: </span> San Ignacio 3422
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Número La Florida:</span>
                          <a href="tel://+56998306518"> +56 983036518</a>
                          <br />
                          <span>Número San Miguel:</span>
                          <a href="tel://+56936816250"> +56 936816250</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email La Florida: </span>
                          <a href="mailto:laflorida@elrincondulce.cl">
                            laflorida@elrincondulce.cl
                          </a>
                          <br />
                          <span>Email San Miguel: </span>
                          <a href="mailto:sanmiguel@elrincondulce.cl">
                            sanmiguel@elrincondulce.cl
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Instragram: </span>
                          <a href="https://www.instagram.com/pasteleria.rincondulce/?hl=es" target="_blank">@pasteleria.rincondulce</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent;

