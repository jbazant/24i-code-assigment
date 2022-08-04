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

  return (
    <Pressable m={3} onPress={() => navigation.navigate('Detail', item)}>
      <Box w="128px" bgColor="white">
        <MoviePoster item={item} w="128px" h="190px" />
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
    </Pressable>
  );
}
