import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactDetails from '../components/ContactDetails/ContactDetails';
import theme from '../constants/theme';

const ContactsStack = createStackNavigator();

const ContactsNavigation = () => {
  return (
    <ContactsStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Jua',
          color: theme.secondaryFontColor,
        },
        headerStyle: { backgroundColor: theme.primaryColor },
      }}
    >
      <ContactsStack.Screen
        name='ContactsList'
        component={ContactsList}
        options={{ title: 'My contacts' }}
      />
      <ContactsStack.Screen
        name='ContactDetails'
        component={ContactDetails}
        options={{ title: false }}
      />
    </ContactsStack.Navigator>
  );
};

export default ContactsNavigation;
