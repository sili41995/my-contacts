import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { Container, List } from './ContactsList.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import EmptyListMessage from 'components/EmptyListMessage/EmptyListMessage';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      {contacts.length ? (
        <List
          contentContainerStyle={{ gap: 8 }}
          data={contacts}
          renderItem={({ item }) => <ContactsListItem contact={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      ) : (
        <EmptyListMessage />
      )}
    </Container>
  );
};

export default ContactsList;
