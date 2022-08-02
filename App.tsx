import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { nbTheme } from './src/nbTheme';
import { RootStack } from './src/components/navigation/RootStack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <NativeBaseProvider theme={nbTheme}>
      <StatusBar style="light" />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
