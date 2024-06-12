import React from 'react';
import { Link, To } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

type IconLinkProps = {
  children: React.ReactNode,
  to: To,
}

export default function IconLink({
  children,
  to,
}: IconLinkProps) {
  return (
    <IconButton component={Link} to={to} target='_blank'>
      {children}
    </IconButton>
  );
}

export const LinkedInIconLink = () => (
  <IconLink to="https://www.linkedin.com/in/ian-price-8b612967/">
    <LinkedInIcon />
  </IconLink>
)

export const XIconLink = () => (
  <IconLink to="https://x.com/IanPriceAuthor">
    <XIcon />
  </IconLink>
)

export const GithubIconLink = () => (
  <IconLink to="https://github.com/IanPriceMB">
    <GitHubIcon />
  </IconLink>
)