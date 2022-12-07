import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table
} from '@mui/material/'

function createData(id, date, name, quantity) {
  return { id, date, name, quantity };
}

const rows = [
  createData(0, '07 Dic 2022 - 11:31', 'Encargado2', '20grs'),
  createData(1, '07 Dic 2022 - 07:20', 'Encargado1', '40grs'),
  createData(2, '07 Dic 2022 - 03:10', 'Encargado2', '20grs'),
  createData(3, '06 Dic 2022 - 23:59', 'Automático', '30grs'),
  createData(4, '06 Dic 2022 - 18:00', 'Automático', '20grs'),
];

const Historial = () => {
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Fecha</b></TableCell>
            <TableCell><b>Encargado</b></TableCell>
            <TableCell><b>Cantidad</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Historial;
