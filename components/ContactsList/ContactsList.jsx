// import { useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import ContactsListItem from 'components/ContactsListItem';
// import EmptyListMessage from 'components/EmptyListMessage';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import { Container, List } from './ContactsList.styled';
// import sortContactsByName from 'utils/sortContactsByName';
// import filterContactsByName from 'utils/filterContactsByName';
// import { selectContacts } from 'redux/contacts/selectors';
// import searchParamsKeys from 'constants/searchParamsKeys';
// import { useMemo } from 'react';

// const { FILTER_SP_KEY, SORT_SP_KEY } = searchParamsKeys;

const ContactsList = () => {
  const contacts = [
    { id: 1, name: 'alex', number: 12345678 },
    { id: 2, name: 'alex', number: 12345678 },
    { id: 3, name: 'alex', number: 12345678 },
    { id: 4, name: 'alex', number: 12345678 },
    { id: 5, name: 'alex', number: 12345678 },
    { id: 6, name: 'alex', number: 12345678 },
    { id: 7, name: 'alex', number: 12345678 },
    { id: 8, name: 'alex', number: 12345678 },
    { id: 9, name: 'alex', number: 12345678 },
    { id: 10, name: 'alex', number: 12345678 },
    { id: 11, name: 'alex', number: 12345678 },
    { id: 12, name: 'alex', number: 12345678 },
    { id: 13, name: 'alex', number: 12345678 },
    { id: 14, name: 'alex', number: 12345678 },
  ];
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
          data={contacts}
          renderItem={({ item }) => <ContactsListItem contact={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </Container>
  );
};

export default ContactsList;
