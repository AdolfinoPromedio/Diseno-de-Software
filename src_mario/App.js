import './App.css';
import React from 'react';
import CarrouselComponent from './components/CarrouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import CardComponent from './components/CardComponent';
import TabsComponent from './components/TabsComponent';
/* import PaginationComponente from './components/PaginationComponente'; */

function App() {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <CarrouselComponent></CarrouselComponent>
      <TabsComponent></TabsComponent>
      <CardComponent></CardComponent>
      <header className="App-header">
      <FooterComponent></FooterComponent>
      </header>
    </div>
  );
}

export default App;
