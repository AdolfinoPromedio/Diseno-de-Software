import './App.css';
import React from 'react';
import CarrouselComponent from './components/CarrouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import CardComponent from './components/CardComponent';
import TabsComponent from './components/TabsComponent';
import GroupsCards from './components/cmp_cads_categoria/TiposProductos';
import Cards_productos from './components/cmp_cads_lista_productos/Cards_lista.js';
/* import PaginationComponente from './components/PaginationComponente'; */
{/* <NavBarComponent></NavBarComponent>
      <CarrouselComponent></CarrouselComponent>
      <TabsComponent></TabsComponent>
       <CardComponent></CardComponent> 
      <GroupsCards></GroupsCards>
      <header className="App-header">
      <FooterComponent></FooterComponent>
      <Cards_productos></Cards_productos>
      <GroupsCards></GroupsCards>
      </header>
      
      */}
function App() {
  return (
    <div className="App">
     
     
     <Cards_productos></Cards_productos>

      
    </div>
  );
}

export default App;
