import { useState, useEffect } from 'react';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ListProduct from './ListProduct';
import CreateProduct from './CreateProduct';
import axios from 'axios';

function Product() {
  const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';

  const [products, setProducts] = useState([]);
  const [clickedRow, setClickedRow] = useState(-1);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    const limit = 10;
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') == null ? 1 : params.get('page');
    const getListUrl = url + '?page=' + page + '&limit=' + limit;
    axios({
      method: 'GET',
      url: getListUrl,
    })
      .then((response) => {
        const { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const btnResetOnClick = function (event) {
    setFormData({
      id: '',
      name: '',
      price: '',
    });

    setClickedRow(-1);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <CreateProduct
          btnResetOnClick={ btnResetOnClick }
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

export default Product;
