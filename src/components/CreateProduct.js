import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

function CreateProduct({ clickedRow }) {
  const [value, setValue] = useState(clickedRow);
  const onChangeHandler = (event) => {
    console.log(event)
  }
  console.log(clickedRow, value)
  return (
    <Container maxWidth="sm">
      <form>
        <TextField
          fullWidth
          label="Id"
          variant="filled"
          onChange={onChangeHandler}
          value={ clickedRow.id } />
        <TextField
          fullWidth
          variant="filled"
          onChange={onChangeHandler}
          label="Name"
          value={clickedRow.name} />
        <TextField
          fullWidth
          label="Price"
          variant="filled"
          onChange={onChangeHandler}
          value={clickedRow.price} />
        <Button color="primary">Submit</Button>
      </form>
    </Container>
  );
}

export default CreateProduct;
