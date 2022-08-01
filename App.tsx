import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { nbTheme } from './nbTheme';
import { RootStack } from './src/navigation/components/RootStack';

export default function App() {
  return (
    <NativeBaseProvider theme={nbTheme}>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
