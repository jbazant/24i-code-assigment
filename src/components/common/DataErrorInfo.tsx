import { Button, Heading, Text } from 'native-base';
import { Card } from './Card';

type DataErrorInfoProps = {
  onReloadPress: () => void;
};

export function DataErrorInfo({ onReloadPress }: DataErrorInfoProps) {
  return (
    <Card>
      <Heading textAlign="center">Error loading data</Heading>
      <Text textAlign="center">
        Application was unable to load requested data.
      </Text>
      <Button onPress={onReloadPress}>Try again</Button>
    </Card>
  );
}
