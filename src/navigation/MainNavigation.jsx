import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactsScreen from 'screens/ContactsScreen';
import AboutAppScreen from 'screens/AboutAppScreen';
import AddContactScreen from 'screens/AddContactScreen';
import { AntDesign } from '@expo/vector-icons';
import UserProfileScreen from '../screens/UserProfileScreen';

const MainTab = createBottomTabNavigator();
const TabNavigatorScreenOptions = {
  headerShown: false,
  unmountOnBlur: true,
  tabBarShowLabel: false,
};

const MainNavigation = () => {
  return (
    <MainTab.Navigator
      initialRouteName='Contacts'
      screenOptions={TabNavigatorScreenOptions}
    >
      <MainTab.Screen
        name='UserProfile'
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name='Contacts'
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='contacts' size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name='AddContact'
        component={AddContactScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='adduser' size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name='AboutApp'
        component={AboutAppScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='questioncircleo' size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainNavigation;
