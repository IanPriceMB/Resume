import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Link as RouterLink,
} from 'react-router-dom';

type AppBarHamburgerMenuProps = {
  pages: string[],
}

export function AppBarHamburgerMenu({
  pages,
}: AppBarHamburgerMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        id="nav-menu-button"
        sx={{ mr: 2, display: { lg: 'none', md: 'inline-flex' } }}
        aria-controls={open ? 'nav-hamburger-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="nav-hamburger-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'nav-menu-button',
        }}
      >
        {pages.map((page, index) => {
          const url = page.replace(/ /g, '-').toLowerCase()
          const isActive = `/${url}` === location.pathname

          return (
            <MenuItem
              key={`${index}-${url}-hamburger`}
              onClick={handleClose}
              sx={{
                textDecoration: isActive ? 'underline' : 'none'
              }}
              component={RouterLink}
              to={url}
            >
              {page}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}