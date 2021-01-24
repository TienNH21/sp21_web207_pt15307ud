import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

function CreateProduct({
  clickedRow,
  setProducts,
  setFormData,
  formData,
}) {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setProducts(function (oldState) {
      if (clickedRow != -1) {
        return oldState.map((value, index) => {
          return index == clickedRow ? formData : value;
        });
      }

      return [
        ...oldState,
        formData,
      ];
    });
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={ onSubmitHandler }>
        <TextField
          fullWidth
          label="Id"
          name="id"
          variant="filled"
          style={{ marginTop: '20px' }}
          onChange={onChangeHandler}
          value={ formData.id } />
        <TextField
          fullWidth
          name="name"
          variant="filled"
          style={{ marginTop: '20px' }}
          onChange={onChangeHandler}
          label="Name"
          value={formData.name} />
        <TextField
          fullWidth
          label="Price"
          name="price"
          variant="filled"
          style={{ marginTop: '20px' }}
          onChange={onChangeHandler}
          value={formData.price} />
        <Button
          style={{ marginTop: '20px' }}
          type="submit"
          color="primary">Submit</Button>
      </form>
    </Container>
  );
}

export default CreateProduct;
