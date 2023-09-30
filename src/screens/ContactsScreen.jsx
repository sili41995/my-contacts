import React from 'react';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import ContactsNavigation from '../navigation/ContactsNavigation';

const ContactsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return <ContactsNavigation />;
};

export default ContactsScreen;
