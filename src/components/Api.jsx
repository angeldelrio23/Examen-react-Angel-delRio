import React from 'react';
import { Form, Button, Container, Table } from 'react-bootstrap';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      tableData: [],
      selectedItem: '',
      name: '',
    };
  }
  async componentDidMount() {
    fetch('https://api-mobilespecs.azharimm.site/v2/top-by-fans')
      .then((response) => response.json())
      .then((datos) =>
        this.setState({
          tableData: datos.data,
        })
      );
  }
  render() {
    return (
      <select name="Marcas Telefono">
        {this.state.tableData.map((item) => {
          return <option value="1">{item.brand_name}</option>;
        })}
      </select>
    );
  }
}
export default Api;
