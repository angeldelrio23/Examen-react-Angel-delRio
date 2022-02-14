import React from 'react';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PaginasApp } from './data/PaginasApp';

function App() {
  return (
    <Router>
      <Menu />
      {PaginasApp.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}

export default App;
