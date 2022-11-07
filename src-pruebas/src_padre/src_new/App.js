import logo from './logo.svg';

import React from 'react';
import CardComponentInicio from './CardsComponent/CardsInicio/CardComponentInicio';
import CardComponentProducts from './CardsComponent/CardsPageProduct/CardComponentProducts';
import Card_cate from './cmp/card-cate';
//<CardComponentInicio></CardComponentInicio>
//<CardComponentInicio imageSource={imagen}title={nombre} precio={precio} > </CardComponentInicio>



const nombre="palta";
const imagen="https://d320djwtwnl5uo.cloudfront.net/recetas/cover_agumj15skr_1200_800PANDECAJA.jpg";
const precio=1000;
function App() {
  return (
    
    <CardComponentInicio imageSource={imagen}title={nombre} precio={precio} > </CardComponentInicio>
  );
}

export default App;
