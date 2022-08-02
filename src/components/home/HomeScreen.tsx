import { useQuery } from '@tanstack/react-query';
import { Box, Center, ScrollView, Text } from 'native-base';
import { getHomeData } from '../../models/queries';
import { DataErrorInfo } from '../common/DataErrorInfo';
import { LoadingIndicator } from '../common/LoadingIndicator';

export function HomeScreen() {
  const { isLoading, refetch, isError } = useQuery(['home'], getHomeData);

  if (isLoading) {
    return (
      <Center safeArea flex={1} bgColor="primary">
        <LoadingIndicator />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center safeArea flex={1} bgColor="primary">
        <DataErrorInfo onReloadPress={refetch} />
      </Center>
    );
  }

  return (
    <Box safeArea flex={1} bgColor="primary">
      <ScrollView>
        <Text>Data loaded</Text>
      </ScrollView>
    </Box>
  );
}
