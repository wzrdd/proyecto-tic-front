import Temperature from './components/Temperature'
import Humidity from './components/Humidity'
import Home from './components/Home'
import Sensor from './components/Sensor'
import Historial from './components/Historial'
import TempActual from './components/TempActual'
import HumActual from './components/HumActual'

import './App.css';
import { Paper, Box, Grid, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const mdTheme = createTheme();

const App = () => {
  document.title = 'MATH - Home'

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Sensor></Sensor>
      <Box sx={{ display: 'flex' }}>
        <Container maxWidth="lg" sx={{ mt: 2, mb: 2, mx: "auto" }}>
          <Grid container
            spacing={1}
            padding={0}
            style={{ minHeight: '100vh' }}
          >
            <Grid item xs={12} md={12} lg={12}>
              <Paper elevation={1}>
                <Home></Home>
              </Paper>
            </Grid>

            <Grid item xs={6} md={6} lg={6} >
              <Paper elevation={3}>
                <TempActual></TempActual>
              </Paper>
            </Grid>

            <Grid item xs={6} md={6} lg={6} >
              <Paper elevation={3}>
                <HumActual></HumActual>
              </Paper>
            </Grid>

            <Grid item xs={6} md={6} lg={6} >
              <Paper elevation={7}>
                <h2 style={{ textAlign: "center" }} >Temperatura</h2>
              </Paper>

              <Paper elevation={3}>
                <Temperature></Temperature>
              </Paper>
            </Grid>

            <Grid item xs={6} md={6} lg={6}>
              <Paper elevation={7}>
                <h2 style={{ textAlign: "center" }}>Humedad</h2>
              </Paper>

              <Paper elevation={3}>
                <Humidity></Humidity>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper elevation={7}>
                <h2 style={{ textAlign: "center" }}>Historial</h2>
              </Paper>

              <Paper elevation={7}>
                <Historial></Historial>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
