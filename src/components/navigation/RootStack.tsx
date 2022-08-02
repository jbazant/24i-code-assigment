import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../detail/DetailScreen';
import { HomeScreen } from '../home/HomeScreen';
import { RootStackParamList } from '../../types/RootStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
