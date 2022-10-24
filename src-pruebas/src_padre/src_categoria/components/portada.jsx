import React from "react";
import Barra from "./barra";
import  BootstrapCarousel from "./carro";
import Image from 'react-bootstrap/Image'
import Muestraproductos from "./muestra";

import Cards from "./components-cards/Cards";

function Portada() {
    return(
        <div>
            <div><BootstrapCarousel></BootstrapCarousel></div>
            

            


            <div style={{backgroundColor:"#7794EC",}}>
            <Barra></Barra>
            </div>

            

            <div >
                <Image src="https://okdiario.com/img/2020/03/25/reposteria-casera-confinamiento-655x368.jpg" rounded  />
            </div> 


            <Muestraproductos></Muestraproductos>
            

            
            
            
            

            
            


            

            

            
            
            
        </div>
       

    );
}

export default Portada;

