import React from 'react';
import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material';
import {
  Link as RouterLink,
} from 'react-router-dom';

export function NavBar() {
  const pages = ['Software Engineering', 'Writing', 'Propmpt Engineering', 'Content Creation', 'Project Management', 'Video Games', 'Esports'];

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component={RouterLink}
          to="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Ian Price
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={RouterLink}
              to={page.replace(/ /g, '-').toLowerCase()}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
};