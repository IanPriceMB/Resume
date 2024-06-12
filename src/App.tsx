import React from 'react';
import { Container } from '@mui/material';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth='lg' sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      <ScrollRestoration />
    </>
  )
};
export default App;