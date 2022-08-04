import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Heading, Pressable } from 'native-base';
import React from 'react';
import { MovieShape } from '../../types/movieData';
import { RootStackParamList } from '../../types/RootStack';
import { MoviePoster } from '../common/MoviePoster';

type MovieItemProps = {
  item: MovieShape;
};

export function MovieItem({ item }: MovieItemProps) {
  const { title } = item;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const width = { base: '128px', md: '190px', lg: '256px' };
  const height = { base: '190px', md: '282px', lg: '380px' };
  return (
    <Pressable m={3} onPress={() => navigation.navigate('Detail', item)}>
      <Box w={width} bgColor="white">
        <MoviePoster item={item} w={width} h={height} />
        <Heading
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          accessibilityLabel="Asset title"
          textAlign="center"
          my={3}
          mx={2}
        >
          {title}
        </Heading>
      </Box>
    </Pressable>
  );
}
