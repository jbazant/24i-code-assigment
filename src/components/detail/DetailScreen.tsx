import { StackScreenProps } from '@react-navigation/stack';
import { Box, HStack, VStack } from 'native-base';
import { RootStackParamList } from '../../types/RootStack';
import { MoviePoster } from '../common/MoviePoster';
import { DescriptionBlock } from './DescriptionBlock';

export function DetailScreen({
  route,
}: StackScreenProps<RootStackParamList, 'Detail'>) {
  const item = route.params;
  return (
    <HStack flex={1} justifyContent="center" bgColor="primary">
      <VStack flex={1} maxW="900px">
        <Box flex={2}>
          <MoviePoster item={item} w={'100%'} h={'100%'} />
        </Box>
        <DescriptionBlock asset={item} />
      </VStack>
    </HStack>
  );
}
