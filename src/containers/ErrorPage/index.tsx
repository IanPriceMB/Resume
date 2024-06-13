import { Button, Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useRouteError, isRouteErrorResponse, Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let navigate = useNavigate();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  const handleGoBack: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    navigate(-1)
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', mt: -15 }}
    >
      <Grid item xs={3}>
        <Paper id="error-page" sx={{ p: 2, display: 'flex', gap: '10px', justifyContent: 'center', flexFlow: 'column', alignItems: 'center' }}>
          <Typography variant='h1' component='h1'>Oops!</Typography>
          <Typography variant='body1' component='p'>Sorry, an unexpected error has occurred.</Typography>
          <Typography variant='body1' component='p'>
            <i>{errorMessage}</i>
          </Typography>
          <Box component='div' display='flex' justifyContent='center' gap='24px'>
            <Button onClick={handleGoBack} variant='contained'>Go Back</Button>
            <Button component={Link} to='/' variant='outlined'>Return to home</Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}