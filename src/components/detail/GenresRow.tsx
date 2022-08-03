import { Badge, HStack } from 'native-base';
import React from 'react';

export type GenresRowProps = {
  genres: string[];
};

export const GenresRow = ({ genres }: GenresRowProps) => {
  return (
    <HStack justifyContent="flex-end">
      {genres.map((genre) => (
        <Badge key={genre}>{genre}</Badge>
      ))}
    </HStack>
  );
};
