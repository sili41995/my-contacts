import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';

const AuthStack = createStackNavigator();
const authScreenOptions = { headerShown: false };

export const PublicLinks = () => {

  return (
    <AuthStack.Navigator initialRouteName='Login'>
      <AuthStack.Screen
        name='Login'
        component={LoginScreen}
        options={authScreenOptions}
      />
      <AuthStack.Screen
        name='Register'
        component={RegisterScreen}
        options={authScreenOptions}
      />
    </AuthStack.Navigator>
  );
};
