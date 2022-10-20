import './App.css';
import React from 'react';
import CarrouselComponent from './components/CarrouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import TabsComponent from './components/TabsComponent';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Productos from './pages/Productos';
import Redes from './pages/Redes';
import Ubicacion from './pages/Ubicacion';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarComponent></NavBarComponent>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Productos' element={<Productos />} ></Route>
          <Route path='/Redes' element={<Redes />} ></Route>
          <Route path='/Ubicacion' element={<Ubicacion />} ></Route>
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