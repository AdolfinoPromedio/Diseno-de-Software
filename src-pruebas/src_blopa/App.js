import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Productos from './pages/Productos';
import Ubicacion1 from './pages/Ubicacion1';
import Ubicacion2 from './pages/Ubicacion2';
import Ordenar from './pages/Ordenar';
import Contacto from './pages/Contacto';
import Carro from './pages/Carro';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent></NavBarComponent>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Productos' element={<Productos />} ></Route>
          <Route path='/Ubicacion/1' element={<Ubicacion1 />} ></Route>
          <Route path='/Ubicacion/2' element={<Ubicacion2 />} ></Route>
          <Route path='/Ordenar' element={<Ordenar />} ></Route>
          <Route path='/Contacto' element={<Contacto />} ></Route>
          <Route path='/Carro' element={<Carro />} ></Route>
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