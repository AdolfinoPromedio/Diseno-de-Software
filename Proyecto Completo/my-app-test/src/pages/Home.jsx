import React from 'react';
import CarrouselComponent from '../components/CarrouselComponent';
import ShowCardsCategory from '../components/CardsComponent/CardsInicio/ShowCardsCategory';
import AboutComponent from '../components/AboutComponent';

export const Home = () =>{
    return(
        <div>
            <CarrouselComponent></CarrouselComponent>
            <br />
            <AboutComponent></AboutComponent>
            <div class="heading only_font2">
                <h1>Productos</h1>
            </div>
            <ShowCardsCategory></ShowCardsCategory>
        </div>
    )
}
export default Home;