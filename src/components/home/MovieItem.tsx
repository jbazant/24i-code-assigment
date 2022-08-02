import { Box, Heading, Image } from 'native-base';
import React from 'react';
import { MovieShape } from '../../types/movieData';

type MovieItemProps = {
  item: MovieShape;
};

export function MovieItem({ item }: MovieItemProps) {
  const { posterUrl, title } = item;

  return (
    <Box m={3} w="128px" bgColor="white">
      <Image
        source={{ uri: posterUrl }}
        alt={'Poster for: ' + title}
        w="128px"
        h="190px"
      />
      <Heading
        fontSize="sm"
        accessibilityLabel="Asset title"
        textAlign="center"
        my={3}
        mx={2}
      >
        {title}
      </Heading>
    </Box>
  );
}
