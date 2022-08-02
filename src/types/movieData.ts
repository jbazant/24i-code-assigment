export type MovieShape = {
  id: number;
  title: string;
  year: string;
  duration: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
};

export type MovieCarouselShape = {
  title: string;
  items: MovieShape[];
};
