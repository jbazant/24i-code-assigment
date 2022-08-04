import { IImageProps, Image } from 'native-base';
import { MovieShape } from '../../types/movieData';

export type MoviePosterProps = {
  item: MovieShape;
} & Omit<IImageProps, 'source' | 'alt'>;

export function MoviePosterBase({ item, ...rest }: MoviePosterProps) {
  const { posterUrl, title } = item;

  return (
    <Image source={{ uri: posterUrl }} alt={'Poster for: ' + title} {...rest} />
  );
}
