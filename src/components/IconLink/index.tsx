import React from 'react';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

type IconLinkProps = {
  children: React.ReactNode,
  href: string,
}

export default function IconLink({
  children,
  href,
}: IconLinkProps) {
  return (
    <IconButton component='a' href={href} target='_blank'>
      {children}
    </IconButton>
  );
}

export const LinkedInIconLink = () => (
  <IconLink href="https://www.linkedin.com/in/ian-price-8b612967/">
    <LinkedInIcon />
  </IconLink>
)

export const XIconLink = () => (
  <IconLink href="https://x.com/IanPriceAuthor">
    <XIcon />
  </IconLink>
)

export const GithubIconLink = () => (
  <IconLink href="https://github.com/IanPriceMB">
    <GitHubIcon />
  </IconLink>
)