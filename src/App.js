import './App.css';
import { useState } from 'react';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListProduct from './components/ListProduct';

function App() {
  const initValue = [
    {id: 1, name: 'IPhone 12', price: '29,999,999.00'},
    {id: 2, name: 'IPhone 11', price: '14,999,999.00'},
    {id: 3, name: 'Oppo', price: '5,999,999.00'},
  ];

  const [products, setProducts] = useState(initValue);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ListProduct data={ products } />
      </Container>
    </React.Fragment>
  );
}

export default App;
