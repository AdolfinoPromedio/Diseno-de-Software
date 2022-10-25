import React from 'react';
import CarrouselComponent from '../components/CarrouselComponent';
import ShowCardsCategory from '../components/CardsComponent/CardsInicio/ShowCardsCategory';
import AboutComponent from '../components/AboutComponent';

export const Home = () =>{
    return(
        <div>
            <CarrouselComponent></CarrouselComponent>
            <AboutComponent></AboutComponent>
            <ShowCardsCategory></ShowCardsCategory>
        </div>
    )
}

export default Home;