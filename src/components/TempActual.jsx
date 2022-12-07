import Typography from '@mui/material/Typography';

const TempActual = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}><b>Temperatura Actual</b></h2>
      <Typography style={{ textAlign: 'center' }} component="p" variant="h4">
        32°
      </Typography>
    </>
  )
}

export default TempActual;
