import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Container, Typography, Grid } from '@mui/material';
import profilePicture from './assets/profile.jpg'

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='static'>
        <Typography variant="h1" component="h2">
          Ian Price
        </Typography>
      </AppBar>
      <Container maxWidth='sm'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={profilePicture} alt="Ian Price Profile Image" />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="paragraph" component="p">
              placeholder
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
};
export default App;