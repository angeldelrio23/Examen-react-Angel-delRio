import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.valorMarcas = React.createRef();
    this.state = {
      tableData: [],
      marcas: [],
      imagen: '',
      marca: '',
      sistemaop: '',
      dimension: '',
      almacenamiento: '',
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/brands'
    );
    const responseData = await response.json();
    const response2 = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/top-by-fans'
    );
    const responseData2 = await response2.json();
    this.setState({
      tableData: responseData2.data.phones,
      marcas: responseData.data,
    });
  }

  async changeStateClicked(item) {
    const slugSelected = item.slug;
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/ ' + slugSelected
    );
    const responseData = await response.json();
    this.setState({
      imagen: responseData.data.thumbnail,
      marca: responseData.data.brand,
      sistemaop: responseData.data.os,
      dimension: responseData.data.dimension,
      almacenamiento: responseData.data.storage,
    });
  }

  añadir() {
    this.tlfsFavoritos.push({
      imagen: this.state.imagen,
      marca: this.state.marca,
      sistema: this.state.sistema,
      dimension: this.state.dimension,
      almacenamiento: this.state.almacenamiento,
    });
  }

  componentWillUnmount() {
    localStorage.setItem('tlfs', JSON.stringify(this.tlfsFavoritos));
  }

  async buscar() {
    const marca = this.valorMarcas.current.value;
    const response = await fetch(
      'http://api-mobilespecs.azharimm.site/v2/search?query= ' + marca
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data.phones,
    });
  }

  render() {
    return (
      <div id="ejercicio2api">
        <select ref={this.valorMarcas}>
          {this.state.marcas.map((item) => {
            return <option value={item.brand_name}>{item.brand_name}</option>;
          })}
        </select>

        <Button variant="primary" onClick={this.buscar.bind(this)}>
          Search
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((item) => {
              return (
                <tr onClick={() => this.changeStateClicked(item)}>
                  <td>{item.phone_name}</td>
                  <td>{item.slug}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.imagen} />
          <Card.Body>
            <Card.Text>Marca: {this.state.marca}</Card.Text>
            <Card.Text>S.O.: {this.state.sistemaop}</Card.Text>
            <Card.Text>Dimensión: {this.state.dimension}</Card.Text>
            <Card.Text>Almacenamiento: {this.state.almacenamiento}</Card.Text>
          </Card.Body>
          <Button variant="primary" onClick={() => this.añadir()}>
            Favoritos
          </Button>
        </Card>
      </div>
    );
  }
}

export default Api;
