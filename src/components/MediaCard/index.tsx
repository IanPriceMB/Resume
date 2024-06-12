import { Box, Grid, GridSize, List, ListItem, Typography } from '@mui/material';
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
}: MediaCardProps) {
  const isEven = useMemo(() => !(listIndex % 2) || listIndex === 0, []);
  const direction = useMemo(() => isEven ? 'row' : 'row-reverse', [isEven]);

  return (
    <Box component='section' sx={{ p: 2 }}>
      <Grid container spacing={2} direction={direction}>
        <Grid item xs={12}>
          <Typography variant='h6' component='h4'>{title}</Typography>
        </Grid>
        {subtitle && <Grid item xs={12}>
          <Typography variant='subtitle2' component='h5'>{subtitle}</Typography>
        </Grid>}
        <Grid item xs={imageSize}>
          <Box
            component='img'
            sx={{
              maxWidth: 350,
              maxHeight: 500,
            }}
            src={src}
            alt={alt}
          />
        </Grid>
        <Grid item xs={infoSize}>
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
            <Typography variant="body1" component="p">{info}</Typography>
          )}
        </Grid>
      </Grid>
    </Box >
  )
}