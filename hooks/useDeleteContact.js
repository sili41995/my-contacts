import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteContact } from '../redux/contacts/operations';
import { errorToast, successToast } from '../utils/toasts';
import { useNavigation } from '@react-navigation/native';

const useDeleteContact = (path) => {
  const [contactId, setContactId] = useState(null);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  useEffect(() => {
    if (contactId) {
      const promise = dispatch(deleteContact(contactId));
      promise
        .unwrap()
        .then(() => {
          successToast('Contact successfully removed');
          if (path) {
            navigate(path);
          }
        })
        .catch((error) => {
          console.log(error);
          errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, navigate, path]);

  return setContactId;
};

export default useDeleteContact;
