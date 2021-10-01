import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TabStack } from './src/navigation/navigation';
import { AppStack } from './src/navigation/stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <AppStack />
  );
};
export default App;
