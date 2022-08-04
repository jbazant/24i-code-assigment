import { Box, Heading } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { MovieCarouselShape } from '../../types/movieData';
import { MovieItem } from './MovieItem';

export function Carousel({ title, items }: MovieCarouselShape) {
  return (
    <Box>
      <Heading
        accessibilityLabel="Section title"
        color="white"
        pt={5}
        pb={2}
        px={3}
        fontSize={{ base: 'xl', md: '2xl' }}
      >
        {title}
      </Heading>
      <FlatList
        data={items}
        renderItem={({ item }) => <MovieItem item={item} />}
        horizontal
      />
    </Box>
  );
}
