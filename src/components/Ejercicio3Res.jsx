import React from 'react';
import { Card } from 'react-bootstrap';

class Ejercicio3Res extends React.Component {
  constructor(props) {
    super(props);
    this.tlfsFavoritos = JSON.parse(localStorage.getItem('tlfs'));
  }

  componentDidMount() {
    this.tlfsFavoritos = JSON.parse(localStorage.getItem('tlfs'));
  }

  render() {
    return (
      <div id="ejercicio3res">
        {this.tlfsFavoritos.map((item) => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Text>Marca: {item.marca}</Card.Text>
                <Card.Text>S.O.: {item.sistema}</Card.Text>
                <Card.Text>Dimensiones: {item.dimension}</Card.Text>
                <Card.Text>Almacenamiento: {item.almacenamiento}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Ejercicio3Res;
