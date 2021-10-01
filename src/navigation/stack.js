import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Login from '../screens/login';
import ForgetPassword from '../screens/forgetPassword';
import Register from '../screens/register';
import ResetPassword from '../screens/resetPassword';
import Auth from '../screens/auth';
import Intro from '../screens/intro';
import Onboarding from '../screens/onboarding';


import {TabStack} from './navigation';

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="tabs" component={TabStack} />
    
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
