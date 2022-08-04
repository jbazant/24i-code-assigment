import { SharedElement } from 'react-navigation-shared-element';
import { MoviePosterBase, MoviePosterProps } from './MoviePosterBase';

export function MoviePoster(props: MoviePosterProps) {
  return (
    <SharedElement id={`asset-${props.item.id}-image`}>
      <MoviePosterBase {...props} />
    </SharedElement>
  );
}
