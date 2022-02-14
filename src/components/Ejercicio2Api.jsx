import React from 'react';
import { Api } from './Api';

class Ejercicio2Api extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2 API</h2>
        <Api />
      </div>
    );
  }
}

export default Ejercicio2Api;
