import React, { Suspense } from 'react';
import { Container } from '@mui/material';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth='lg' sx={{ mt: 4 }}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
      <ScrollRestoration />
    </>
  )
};
export default App;