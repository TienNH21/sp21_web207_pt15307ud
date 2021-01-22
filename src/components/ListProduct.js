import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ListProduct({ data, setClickedRow }) {
  const onClickHandler = (event, value) => {
    setClickedRow(value);
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            data.map(function (value, index) {
              return (
                <TableRow
                  onClick={
                    (event) => {
                      return onClickHandler(event, value);
                    }
                  }
                  key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.price}</TableCell>
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