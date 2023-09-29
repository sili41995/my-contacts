import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactsScreen from 'screens/ContactsScreen';
import AboutAppScreen from 'screens/AboutAppScreen';
import AddContactScreen from 'screens/AddContactScreen';
import { AntDesign } from '@expo/vector-icons';

const mainScreenOptions = {
  headerShown: false,
};
const mainTabsOptions = { tabBarShowLabel: false };
const MainTabs = createBottomTabNavigator();

const PrivateLinks = () => {
  return (
    <MainTabs.Navigator
      screenOptions={mainTabsOptions}
      initialRouteName='Contacts'
    >
      <MainTabs.Screen
        name='Contacts'
        component={ContactsScreen}
        options={{
          ...mainScreenOptions,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='contacts' size={size} color={color} />
          ),
        }}
      />
      <MainTabs.Screen
        name='Add contact'
        component={AddContactScreen}
        options={{
          ...mainScreenOptions,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='adduser' size={size} color={color} />
          ),
        }}
      />
      <MainTabs.Screen
        name='About app'
        component={AboutAppScreen}
        options={{
          ...mainScreenOptions,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='questioncircleo' size={size} color={color} />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
};

export default PrivateLinks;
