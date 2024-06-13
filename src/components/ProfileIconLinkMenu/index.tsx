import Box from '@mui/material/Box';
import { GithubIconLink, LinkedInIconLink, XIconLink } from '../IconLink';
import React from 'react';

export default function ProfileIconLinkMenu() {
  return (
    <Box component='div' display='flex' justifyContent='flex-end'>
      <LinkedInIconLink />
      <GithubIconLink />
      <XIconLink />
    </Box>
  )
}