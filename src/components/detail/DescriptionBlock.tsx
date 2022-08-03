import { Center, Heading, ScrollView, Text } from 'native-base';
import React from 'react';
import { MovieShape } from '../../types/movieData';
import { Card } from '../common/Card';
import { GenresRow } from './GenresRow';

export type DescriptionBlockProps = {
  asset: MovieShape;
};

export const DescriptionBlock = ({ asset }: DescriptionBlockProps) => {
  const { title, plot, genres } = asset;
  return (
    <ScrollView flex={1} m={3}>
      <GenresRow genres={genres} />
      <Center>
        <Heading
          color="white"
          my={3}
          accessibilityLabel="Asset title"
          textAlign="center"
        >
          {title}
        </Heading>
      </Center>
      <Card>
        <Text accessibilityLabel="Asset plot">{plot}</Text>
      </Card>
    </ScrollView>
  );
};
