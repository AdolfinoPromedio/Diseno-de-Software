import './App.css';
import React from 'react';
import CarrouselComponent from './components/CarrouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Productos from './pages/Productos';
import Ubicacion from './pages/Ubicacion';
import Ordenar from './pages/Ordenar';
import Contacto from './pages/Contacto';

import Cards_productos_1 from './pageproductos/ShowCardsProducts 1';
import Cards_productos_2 from './pageproductos/ShowCardsProducts 2';
import Cards_productos_3 from './pageproductos/ShowCardsProducts 3';
import Cards_productos_4 from './pageproductos/ShowCardsProducts 4';
import Cards_productos_5 from './pageproductos/ShowCardsProducts 5';
import Cards_productos_6 from './pageproductos/ShowCardsProducts 6';




function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent></NavBarComponent>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Productos' element={<Productos />} ></Route>
          <Route path='/Ubicacion' element={<Ubicacion />} ></Route>
          <Route path='/Ordenar' element={<Ordenar />} ></Route>
          <Route path='/Contacto' element={<Contacto />} ></Route>

          <Route path='/Productos1' element={<Cards_productos_1 />} ></Route>
          <Route path='/Productos2' element={<Cards_productos_2 />} ></Route>
          <Route path='/Productos3' element={<Cards_productos_3 />} ></Route>
          <Route path='/Productos4' element={<Cards_productos_4 />} ></Route>
          <Route path='/Productos5' element={<Cards_productos_5 />} ></Route>
          <Route path='/Productos6' element={<Cards_productos_6 />} ></Route>

        </Routes>
        <FooterComponent></FooterComponent>
      </Router>

      {/*
        <CarrouselComponent></CarrouselComponent>
        <TabsComponent></TabsComponent>
      <GroupsCards></GroupsCards>
      {/* <Groupspruductos></Groupspruductos> */}
    </div>
  );
}

export default App;

{/*import Groupspruductos from './components/Productos';
import GroupsCards from './components/TiposProductos';*/}