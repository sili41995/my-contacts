import React from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const ContactsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return <ContactsList />;
};

export default ContactsScreen;
