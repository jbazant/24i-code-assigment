import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import { RootStackParamList } from '../../types/RootStack';
import { Card } from '../common/Card';

export function DetailScreen({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Detail'>) {
  const { title, plot, posterUrl } = route.params;
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
      <ScrollView flex={1} m={3}>
        <Center>
          <Heading color="white" mb={3} accessibilityLabel="Asset title">
            {title}
          </Heading>
        </Center>
        <Card>
          <Text accessibilityLabel="Asset plot">{plot}</Text>
        </Card>
      </ScrollView>
    </VStack>
  );
}
