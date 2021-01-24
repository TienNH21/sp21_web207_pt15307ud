import './App.css';
import { useState } from 'react';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';

function App() {
  const initValue = [
    {id: 1, name: 'IPhone 12', price: '29,999,999.00'},
    {id: 2, name: 'IPhone 11', price: '14,999,999.00'},
    {id: 3, name: 'Oppo', price: '5,999,999.00'},
  ];

  const [products, setProducts] = useState(initValue);
  const [clickedRow, setClickedRow] = useState(-1);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <CreateProduct
          setProducts={ setProducts }
          setFormData={ setFormData }
          formData={ formData }
          clickedRow={ clickedRow } />
        <ListProduct
          setFormData={ setFormData }
          setClickedRow={ setClickedRow }
          data={ products } />
      </Container>
    </React.Fragment>
  );
}

export default App;
