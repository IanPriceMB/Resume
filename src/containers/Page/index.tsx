import React from 'react';
import { GridSize, Paper } from '@mui/material';
import { MediaCard, MediaCardProps } from '../../components/MediaCard';
import { useLoaderData } from 'react-router-dom';

type PageProps = {
  type: string,
  mediaCardSizes?: {
    infoSize?: GridSize,
    imageSize?: GridSize,
  },
  children?: React.ReactNode,
}

export default function Page({
  type,
  mediaCardSizes,
  children,
  ...rest
}: PageProps) {
  const data = useLoaderData() as Omit<MediaCardProps, 'infoSize' | 'imageSize'>[];

  return (
    <Paper elevation={3} {...rest}>
      {data.map((item, index) => (
        <MediaCard
          key={`${index}-${type}`}
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