import { useQuery } from '@tanstack/react-query';
import { Center } from 'native-base';
import { getHomeData } from '../../models/queries';
import { DataErrorInfo } from '../common/DataErrorInfo';
import { LoadingIndicator } from '../common/LoadingIndicator';
import { HomeCarousels } from './HomeCarousels';

export function HomeScreen() {
  const { isLoading, refetch, isError, data } = useQuery(['home'], getHomeData);

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

  return <HomeCarousels carousels={data.carousels} />;
}
