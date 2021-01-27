import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import axios from 'axios';

function App() {
  const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';

  const [products, setProducts] = useState([]);
  const [clickedRow, setClickedRow] = useState(-1);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    console.log('Hello Poly');
    axios({
      method: 'GET',
      url: url,
    })
      .then((response) => {
        const { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <CreateProduct
          setProducts={ setProducts }
          setFormData={ setFormData }
          formData={ formData }
          products={ products }
          clickedRow={ clickedRow } />
        <ListProduct
          setFormData={ setFormData }
          setClickedRow={ setClickedRow }
          setProducts={ setProducts }
          data={ products } />
      </Container>
    </React.Fragment>
  );
}

export default App;
