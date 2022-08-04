import { useToken } from 'native-base';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { DetailScreen } from '../detail/DetailScreen';
import { HomeScreen } from '../home/HomeScreen';
import { RootStackParamList } from '../../types/RootStack';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

export function RootStack() {
  const backIconColor = useToken('colors', 'fuchsia.200');

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: backIconColor,
          headerBackTitleVisible: false,
        }}
        sharedElements={(route) => {
          const { id } = route.params;
          return [`asset-${id}-image`, `asset-${id}-title`];
        }}
      />
    </Stack.Navigator>
  );
}
