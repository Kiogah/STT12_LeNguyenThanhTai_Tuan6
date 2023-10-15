
import { NavigationContainer } from '@react-navigation/native';
import lab3a from './lab3a';
import lab3b from'./lab3b';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={lab3a} />
        <Stack.Screen name='Detail' component={lab3b} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

