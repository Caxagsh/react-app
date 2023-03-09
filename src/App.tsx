import React from 'react';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  return  <div>
    <div>
  <Timer cityCountry="London"/>
  <Timer cityCountry="Japan"/>
  </div>
  <div>
  <Timer cityCountry="Israel"/>
  <Timer cityCountry="Toronto"/>
  </div>
  </div>
}

export default App;
