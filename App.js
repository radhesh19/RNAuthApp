import React from 'react';
import type {Node} from 'react';
import {
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import NavigationFile from './Src/Navigation/navigation';
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <NavigationFile />
    </NavigationContainer>
  );
};
export default App;
