import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Image, VStack } from 'native-base';
import { RootStackParamList } from '../../types/RootStack';
import { DescriptionBlock } from './DescriptionBlock';

export function DetailScreen({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Detail'>) {
  const { title, posterUrl } = route.params;
  return (
    <VStack flex={1} bgColor="primary">
      <Box flex={1}>
        <Image
          w="100%"
          h="100%"
          source={{ uri: posterUrl }}
          alt={'Poster for: ' + title}
        />
      </Box>
      <DescriptionBlock asset={route.params} />
    </VStack>
  );
}
