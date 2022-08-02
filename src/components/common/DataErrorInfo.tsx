import { Button, Heading, Text } from 'native-base';
import { Card } from './Card';

type DataErrorInfoProps = {
  onReloadPress: () => void;
};

export function DataErrorInfo({ onReloadPress }: DataErrorInfoProps) {
  return (
    <Card>
      <Heading>Error loading data</Heading>
      <Text>Application was unable to load requested data.</Text>
      <Button onPress={onReloadPress}>
        <Text fontWeight={600}>Try again</Text>
      </Button>
    </Card>
  );
}
