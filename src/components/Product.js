import { useState, useEffect } from 'react';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ListProduct from './ListProduct';
import CreateProduct from './CreateProduct';
import axios from 'axios';

function Product() {
  const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';

  const [danhMucId, setDanhMucId] = useState(-1);
  const [listDanhMuc, setListDanhMuc] = useState([]);
  const [products, setProducts] = useState([]);
  const [clickedRow, setClickedRow] = useState(-1);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/categories/';
    axios.get(url)
      .then((response) => {
        const { data } = response;
        setListDanhMuc(data);
      })
  }, []);

  const [page, setPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    const urlPhanTrang = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/categories/' + danhMucId +
      "/products?limit=" + limit + "&page=" + page;
    axios({
      method: 'GET',
      url: urlPhanTrang,
    })
      .then((response) => {
        const { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    /*
     * Việc kích hoạt useEffect sẽ phụ thuộc vào giá trị của các phần tử trong mảng.
     * Nếu các phần tử trong mảng có giá trị thay đổi -> useEffect sẽ được gọi.
     */
    page,
    danhMucId,
  ]);

  const btnResetOnClick = function (event) {
    setFormData({
      id: '',
      name: '',
      price: '',
    });

    setClickedRow(-1);
  }

  const trangTruoc = function () {
    if (page == 1) {
      return ;
    }

    setPage(page -1);
  }

  const trangSau = function () {
    setPage(page + 1);
  }

  const danhMucOnChange = function (event) {
    setDanhMucId(event.target.value);
    setPage(1);
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

        <select
          onChange={ danhMucOnChange }
          className="form-control">
          <option>Chọn danh mục</option>
          {
            listDanhMuc.map((danhMuc, index) => {
              return (
                <option
                  key={ index }
                  value={ danhMuc.id }>
                  { danhMuc.name }
                </option>
              );
            })
          }
        </select>

        <ListProduct
          setFormData={ setFormData }
          setClickedRow={ setClickedRow }
          setProducts={ setProducts }
          data={ products } />

        <ul className="pagination">
          <li
            onClick={ trangTruoc }
            className="page-item">
            <a className="page-link">Trang trước</a>
          </li>

          <li className="page-item">
            <a className="page-link">{ page }</a>
          </li>

          <li
            onClick={ trangSau }
            className="page-item">
            <a className="page-link">Trang sau</a>
          </li>
        </ul>
      </Container>
    </React.Fragment>
  );
}

export default Product;
