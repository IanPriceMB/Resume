import React from 'react';
import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';

export function NavBar() {
  let location = useLocation();
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
          {pages.map((page) => {
            const url = page.replace(/ /g, '-').toLowerCase()
            const isActive = `/${url}` === location.pathname
            console.log(url, location.pathname)
            return (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  textDecoration: isActive ? 'underline' : 'none'
                }}
                component={RouterLink}
                to={url}
              >
                {page}
              </Button>
            )
          })}
        </Box>
      </Toolbar>
    </AppBar>
  )
};