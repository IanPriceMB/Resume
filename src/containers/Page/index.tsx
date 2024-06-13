import React from 'react';
import { GridSize, Paper } from '@mui/material';
import { MediaCard, MediaCardProps } from '../../components/MediaCard';
import { useLoaderData, useLocation } from 'react-router-dom';

export type PageProps = {
  mediaCardSizes?: {
    infoSize?: GridSize,
    imageSize?: GridSize,
  },
  children?: React.ReactNode,
}

export default function Page({
  mediaCardSizes,
  children,
  ...rest
}: PageProps) {
  let location = useLocation();

  const data = useLoaderData() as Omit<MediaCardProps, 'infoSize' | 'imageSize'>[];

  return (
    <Paper elevation={3} {...rest}>
      {data.map((item, index) => (
        <MediaCard
          key={`${index}-${location.pathname}`}
          listIndex={index}
          {...mediaCardSizes}
          {...item}
        >
          {children}
        </MediaCard>
      ))}
    </Paper>
  )
}