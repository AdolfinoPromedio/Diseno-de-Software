import React from 'react';
import CarrouselComponent from '../components/CarrouselComponent';
import TabsComponent from '../components/TabsComponent';
import ShowCardsCategory from '../components/CardsComponent/CardsInicio/ShowCardsCategory';

export const Home = () =>{
    return(
        <div>
            <CarrouselComponent></CarrouselComponent>
            <TabsComponent></TabsComponent>
            <ShowCardsCategory></ShowCardsCategory>
        </div>
    )
}

export default Home;