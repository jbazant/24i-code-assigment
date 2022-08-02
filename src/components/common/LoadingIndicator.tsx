import { Spinner, Text } from 'native-base';
import { Card } from './Card';

export function LoadingIndicator() {
  return (
    <Card>
      <Spinner size="lg" />
      <Text>Loading...</Text>
    </Card>
  );
}
