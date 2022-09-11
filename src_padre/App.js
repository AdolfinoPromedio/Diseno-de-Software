import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';


import Portada from './components/portada';
import GroupsCards from './components/TiposProductos';
import ListaGroupsCards from './components/listadoproductos';

function App() {
  return (
    <div className="App">
      
      <Portada></Portada>
      
      <GroupsCards></GroupsCards>
      <div>
        <ListaGroupsCards></ListaGroupsCards>
      </div>
      
    </div>
  );
}

export default App;
