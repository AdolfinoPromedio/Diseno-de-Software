import React from 'react';
import ShowCardsProducts from '../components/CardsComponent/CardsPageProduct/ShowCardsProducts';

export const Productos = () =>{
    return(
        <div>
            <div class="heading">
                <h1>Catálogo de Productos</h1>
            </div>
            <ShowCardsProducts></ShowCardsProducts>
        </div>
    )
}

export default Productos;