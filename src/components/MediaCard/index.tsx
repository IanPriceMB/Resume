import { Box, GridSize, List, ListItem, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import React, { useMemo } from 'react';


export type MediaCardProps = {
  title: string,
  src: string,
  alt: string,
  info: string | string[],
  listIndex?: number,
  subtitle?: string,
  imageSize?: GridSize,
  infoSize?: GridSize,
  href?: string,
  children?: React.ReactNode
}

export function MediaCard({
  title,
  src,
  alt,
  info,
  listIndex = 0,
  subtitle,
  imageSize = 4,
  infoSize = 8,
  href,
  children,
}: MediaCardProps) {
  const isEven = useMemo(() => !(listIndex % 2) || listIndex === 0, []);
  const direction = useMemo(() => isEven ? 'row' : 'row-reverse', [isEven]);

  return (
    <Box component='section' sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        direction={direction}
      >
        <Grid xs={12}>
          <Typography
            variant='h6'
            component='h4'
            sx={{
              alignSelf: {
                xs: 'center',
                sm: 'Center',
              }
            }}
          >
            {title}
          </Typography>
        </Grid>
        {subtitle && (
          <Grid xs={12}>
            <Typography
              variant='subtitle2'
              component='h5'
            >
              {subtitle}
            </Typography>
          </Grid>
        )}
        <Grid
          md={imageSize}
          sm={12}
          xs={12}
          sx={{
            overflowX: 'hidden',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            component='img'
            sx={{
              maxWidth: title === 'Ian Price' ? 'inherit' : {
                xs: 250,
                sm: 300,
                md: 350
              },
              maxHeight: {
                xs: 300,
                sm: 400,
                md: 500
              },
            }}
            src={src}
            alt={alt}
          />
        </Grid>
        <Grid
          md={infoSize}
          sm={12}
          xs={12}
          sx={{
            overflowX: 'hidden',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {Array.isArray(info) ? (
            <List>
              {info.map((item, index) => (
                <ListItem
                  key={`${index}-mediaCardInfo`}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography
              variant="body1"
              component="p"
              sx={{ whiteSpace: 'pre-wrap' }}
            >
              {info}
            </Typography>
          )}
        </Grid>
      </Grid>
      {href && <Box
        component='footer'
        display='flex'
        flexDirection={direction}
        sx={{
          justifyContent: {
            xs: 'center',
            sm: 'center',
            md: 'flex-end',
          }
        }}
      >
        <Link
          component='a'
          href={href}
          target='_blank'
        >
          Check it out!
        </Link>
      </Box>}
      {children}
    </Box >
  )
}