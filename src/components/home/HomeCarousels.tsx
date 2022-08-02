import { Box, ScrollView } from 'native-base';
import { MovieCarouselShape } from '../../types/movieData';
import { Carousel } from './Carousel';

type HomeCarouselsProps = {
  carousels: MovieCarouselShape[];
};

export function HomeCarousels({ carousels }: HomeCarouselsProps) {
  return (
    <Box safeArea flex={1} bgColor="primary">
      <ScrollView>
        {carousels.map(({ title, items }) => (
          <Carousel key={title} title={title} items={items} />
        ))}
      </ScrollView>
    </Box>
  );
}
