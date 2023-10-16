import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactDetails from '../components/ContactDetails/ContactDetails';
import theme from '../constants/theme';
import Filter from '../components/Filter/Filter';

const ContactsStack = createStackNavigator();

const navigatorScreenOptions = {
  headerTitleStyle: {
    fontFamily: 'Jua',
    color: theme.secondaryFontColor,
  },
  headerStyle: {
    backgroundColor: theme.primaryColor,
  },
  headerTintColor: theme.secondaryFontColor,
};

const contactDetailsScreenOptions = { title: false };

const ContactsNavigation = () => {
  return (
    <ContactsStack.Navigator screenOptions={navigatorScreenOptions}>
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
        options={contactDetailsScreenOptions}
      />
    </ContactsStack.Navigator>
  );
};

export default ContactsNavigation;
