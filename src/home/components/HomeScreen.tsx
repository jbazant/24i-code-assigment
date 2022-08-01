import { Center, Spinner, Text } from 'native-base';
import { Card } from '../../common/components/Card';

export function HomeScreen() {
  return (
    <Center safeArea flex={1} bgColor="primary">
      <Card>
        <Spinner size="lg" />
        <Text>Loading...</Text>
      </Card>
    </Center>
  );
}
