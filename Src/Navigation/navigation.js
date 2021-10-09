import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Home, Create} from '../Screens'
const Stack = createNativeStackNavigator();
function Navigation() {

  return (
      <Stack.Navigator>
           <Stack.Screen name="LoginScreen" component={Login} />
           <Stack.Screen name="HomeScreen" component={Home} />
           <Stack.Screen name="CreateScreen" component={Create} />
      </Stack.Navigator>
  );
}

export default Navigation;