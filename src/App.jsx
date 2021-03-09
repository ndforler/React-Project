import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/shared/Router';
import Navigation from './components/shared/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
