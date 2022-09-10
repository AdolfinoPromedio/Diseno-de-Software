import React from 'react';
import logo from './logo.svg';
import './App.css';
/* //import './assets/css/App.css' */


/* // Importar componentes */
import MiComponente from './components/MiComponente'
import Acordeon from './components/acordeon';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Test/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto diseño de software.
        </p>
        {
          /* //alert("KELOKE") */
        }

        <section className='componentes'>
          <MiComponente/>
        </section>

        <section>
          <Acordeon />
        </section>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
