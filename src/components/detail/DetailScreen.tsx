import { StackScreenProps } from '@react-navigation/stack';
import { Box, VStack } from 'native-base';
import { RootStackParamList } from '../../types/RootStack';
import { MoviePoster } from '../common/MoviePoster';
import { DescriptionBlock } from './DescriptionBlock';

export function DetailScreen({
  route,
}: StackScreenProps<RootStackParamList, 'Detail'>) {
  const item = route.params;
  return (
    <VStack flex={1} bgColor="primary">
      <Box flex={1}>
        <MoviePoster item={item} w={'100%'} h={'100%'} />
      </Box>
      <DescriptionBlock asset={item} />
    </VStack>
  );
}
