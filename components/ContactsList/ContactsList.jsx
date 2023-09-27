// import { useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import ContactsListItem from 'components/ContactsListItem';
// import EmptyListMessage from 'components/EmptyListMessage';
import { Text } from 'react-native';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage';
import { Container, List } from './ContactsList.styled';
// import sortContactsByName from 'utils/sortContactsByName';
// import filterContactsByName from 'utils/filterContactsByName';
// import searchParamsKeys from 'constants/searchParamsKeys';
import React, { useMemo, useEffect } from 'react';
import contacts from '../../constants/contacts';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

// const { FILTER_SP_KEY, SORT_SP_KEY } = searchParamsKeys;

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  // const contacts = useSelector(selectContacts);
  // const [searchParams] = useSearchParams();
  // const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  // const sortType = searchParams.get(SORT_SP_KEY) ?? '';
  // const filteredContacts = useMemo(() => {
  //   const sortedContacts = sortContactsByName(contacts, sortType);
  //   return filterContactsByName(sortedContacts, filter);
  // }, [contacts, filter, sortType]);
  // console.log(searchParams);

  return (
    <Container>
      {!!contacts.length && (
        <List
          contentContainerStyle={{ gap: 8 }}
          data={contacts}
          renderItem={({ item }) => <ContactsListItem contact={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </Container>
  );
};

export default ContactsList;
