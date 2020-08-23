import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { renderPokemonTableExample } from './examples/pokemon-table';

function App() {
  return (
    <div className="App">
      {renderPokemonTableExample({isLoaded: true})}
    </div>
  );
}

export default App;
