import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import bg from './images/bgimg3.jpg'
import CardsComponents from './components/CardsComponents';
import AboutComponent from './components/AboutComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <CarouselComponent></CarouselComponent>
      <AboutComponent></AboutComponent>
      <CardsComponents></CardsComponents>
    </div>
  );
}

export default App;
