import { GridSize, Paper } from '@mui/material';
import React from 'react';
import { MediaCard, MediaCardProps } from '../../components/MediaCard';

type PageProps = {
  data: Omit<MediaCardProps, 'infoSize' | 'imageSize'>[]
  type: string,
  mediaCardSizes?: {
    infoSize?: GridSize,
    imageSize?: GridSize,
  },
  children?: React.ReactNode,
}

export function Page({
  data,
  type,
  mediaCardSizes,
  children,
  ...rest
}: PageProps) {
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