import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function ListProduct({
  data,
  setClickedRow,
  setFormData,
  setProducts,
}) {
  const onClickHandler = (event, value, index) => {
    setClickedRow(index);
    setFormData(value);
  }

  const btnDeleteOnClick = (event, index, deleteId) => {
    event.stopPropagation();
    const url = "https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/" + deleteId;
    axios({
      method: 'DELETE',
      url: url
    }).then((response) => {
      if (response.status == 200) {
        setProducts((oldState) => {
          let newState = oldState.filter((val, idx) => {
            return idx != index;
          });

          return newState;
        });
      }
    }).catch((error) => {
      console.log(error, error.response)
    });
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            data.map(function (value, index) {
              return (
                <TableRow
                  onClick={
                    (event) => {
                      return onClickHandler(event, value, index);
                    }
                  }
                  key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.price}</TableCell>
                  <TableCell>
                    <Button
                      onClick={ (event) => {
                        btnDeleteOnClick(event, index, value.id);
                      } }
                      color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default ListProduct;