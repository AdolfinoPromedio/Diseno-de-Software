import React from "react";
import Barra from "./barra";
import Carro from "./carro";
import Image from 'react-bootstrap/Image'


function Portada() {
    return(
        <div>
            <Carro></Carro>


            <Barra></Barra>

            <div>
                 <Image src="https://okdiario.com/img/2020/03/25/reposteria-casera-confinamiento-655x368.jpg" rounded  />
            </div>
        </div>
       

    );
}

export default Portada;

