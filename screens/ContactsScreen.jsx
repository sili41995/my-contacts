import React from 'react';
import ContactsList from '../components/ContactsList/ContactsList';
import { View } from 'react-native';
import EmptyListMessage from '../components/EmptyListMessage/EmptyListMessage';

const ContactsScreen = () => {
  return (
    <View>
      <ContactsList />
      {/* <EmptyListMessage /> */}
    </View>
  );
};

export default ContactsScreen;
