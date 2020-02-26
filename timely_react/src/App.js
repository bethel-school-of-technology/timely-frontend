import React from 'react';
import {Router} from 'react-router-dom';
import Routes from './Routes/Routes';
import history from './Services/Services';


import './App.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}


export default App;
