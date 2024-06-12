import React from 'react';
import { AppBar, Typography, Toolbar, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';
import { AppBarHamburgerMenu } from '../AppBarHamburgerMenu';


export function NavBar() {
  let location = useLocation();

  const pages = ['Software Engineering', 'Writing', 'Propmpt Engineering', 'Content Creation', 'Project Management', 'Video Games', 'Esports'];

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <AppBarHamburgerMenu pages={pages} />
        <Typography
          variant="h5"
          noWrap
          component={RouterLink}
          to="/"
          sx={{
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Ian Price
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }
          }}
        >
          {pages.map((page, index) => {
            const url = page.replace(/ /g, '-').toLowerCase()
            const isActive = `/${url}` === location.pathname

            return (
              <Button
                key={`${index}-${url}-toolbar`}
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