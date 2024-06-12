import { GridSize, Paper } from '@mui/material';
import React from 'react';
import { MediaCard, MediaCardProps } from '../../components/MediaCard';
import { writingData } from '../../data/writingData';

type PageProps = {
  data: Omit<MediaCardProps, 'infoSize' | 'imageSize'>[]
  type: string,
  mediaCardSizes?: {
    infoSize?: GridSize,
    imageSize?: GridSize,
  }
}

export function Page({
  data,
  type,
  mediaCardSizes,
}: PageProps) {
  return (
    <Paper elevation={3}>
      {data.map((item, index) => (
        <MediaCard
          key={`${index}-${type}`}
          listIndex={index}
          {...mediaCardSizes}
          {...item}
        />
      ))}
    </Paper>
  )
}