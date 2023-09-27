import React from 'react';
import ContactsList from '../components/ContactsList/ContactsList';
import EmptyListMessage from '../components/EmptyListMessage/EmptyListMessage';
import { createStackNavigator } from '@react-navigation/stack';
import contacts from '../constants/contacts';
import ContactDetails from '../components/ContactDetails/ContactDetails';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

const ContactsStack = createStackNavigator();
const contactsScreenOptions = { headerShown: false };

const ContactsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const ContactsScreenComponent = contacts.length
    ? ContactsList
    : EmptyListMessage;

  return (
    <ContactsStack.Navigator initialRouteName='ContactsList'>
      <ContactsStack.Screen
        name='ContactsList'
        component={ContactsScreenComponent}
        options={contactsScreenOptions}
      />
      <ContactsStack.Screen
        name='Contact'
        component={ContactDetails}
        options={contactsScreenOptions}
      />
    </ContactsStack.Navigator>
  );
};

export default ContactsScreen;
