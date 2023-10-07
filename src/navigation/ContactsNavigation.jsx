import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactDetails from '../components/ContactDetails/ContactDetails';
import theme from '../constants/theme';
import Filter from '../components/Filter/Filter';

const ContactsStack = createStackNavigator();

const ContactsNavigation = () => {
  return (
    <ContactsStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Jua',
          color: theme.secondaryFontColor,
        },
        headerStyle: {
          backgroundColor: theme.primaryColor,
          // height: 100
        },
      }}
    >
      <ContactsStack.Screen
        name='ContactsList'
        component={ContactsList}
        options={{
          headerTitle: () => <Filter />,
        }}
      />
      <ContactsStack.Screen
        name='ContactDetails'
        component={ContactDetails}
        options={{
          title: false,
        }}
      />
    </ContactsStack.Navigator>
  );
};

export default ContactsNavigation;
