import './App.css';
import React from 'react';
import CarrouselComponent from './components/CarrouselComponent';
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

import Cards_productos_1 from './PagesProductos/ShowCardsProducts 1';
import Cards_productos_2 from './PagesProductos/ShowCardsProducts 2';
import Cards_productos_3 from './PagesProductos/ShowCardsProducts 3';
import Cards_productos_4 from './PagesProductos/ShowCardsProducts 4';
import Cards_productos_5 from './PagesProductos/ShowCardsProducts 5';
import Cards_productos_6 from './PagesProductos/ShowCardsProducts 6';

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

          <Route path='/Productos1' element={<Cards_productos_1 />} ></Route>
          <Route path='/Productos2' element={<Cards_productos_2 />} ></Route>
          <Route path='/Productos3' element={<Cards_productos_3 />} ></Route>
          <Route path='/Productos4' element={<Cards_productos_4 />} ></Route>
          <Route path='/Productos5' element={<Cards_productos_5 />} ></Route>
          <Route path='/Productos6' element={<Cards_productos_6 />} ></Route>

        </Routes>
        <FooterComponent></FooterComponent>
      </Router>

    </div>
  );
}

export default App;

{/*import Groupspruductos from './components/Productos';
import GroupsCards from './components/TiposProductos';*/}