import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { selectContacts } from '../redux/contacts/selectors';

const useTargetContact = () => {
  const {
    params: { id },
  } = useRoute();
  const contacts = useSelector(selectContacts);
  if (contacts.length) {
    return contacts.find(({ id: contactId }) => contactId === id);
  }
};

export default useTargetContact;
