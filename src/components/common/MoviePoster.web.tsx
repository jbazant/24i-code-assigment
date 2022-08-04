import { Image } from 'native-base';
import React from 'react';
import { MovieShape } from '../../types/movieData';

export type MoviePosterProps = {
  item: MovieShape;
  w: string;
  h: string;
};

export function MoviePoster({ item, w, h }: MoviePosterProps) {
  const { posterUrl, title } = item;
  return (
    <Image
      source={{ uri: posterUrl }}
      alt={'Poster for: ' + title}
      w={w}
      h={h}
    />
  );
}
