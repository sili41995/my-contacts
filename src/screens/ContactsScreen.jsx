import React from 'react';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import ContactsNavigation from '../navigation/ContactsNavigation';
import { selectIsLoading } from 'redux/contacts/selectors';
import Loader from '../components/Loader/Loader';

const ContactsScreen = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? <Loader /> : <ContactsNavigation />;
};

export default ContactsScreen;
