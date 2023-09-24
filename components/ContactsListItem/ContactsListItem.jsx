// import { useSelector } from 'react-redux';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import pagesPath from 'constants/pagesPath';
// import iconBtnType from 'constants/iconBtnType';
// import IconButton from 'components/IconButton';
// import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
import { Text } from 'react-native';
import getContactInfo from '../../utils/getContactInfo';
// import useDeleteContact from 'hooks/useDeleteContact';
import {
  Email,
  Image,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
  Person,
} from './ContactsListItem.styled';

const ContactsListItem = ({ contact }) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  // const isLoading = useSelector(selectIsLoading);
  // const setContactId = useDeleteContact();

  return (
    <Item>
      <Image source={userAvatar} />
      <ContactInfo>
        <Text>{name}</Text>
        <Phone>{number}</Phone>
        <Role>{role}</Role>
      </ContactInfo>
      {/* <IconButton
        top={0}
        right={0}
        position='absolute'
        disabled={isLoading}
        btnType={iconBtnType.deleteTransparent}
        width={44}
        height={35}
        onBtnClick={() => {
          setContactId(id);
        }}
      >
        <AiOutlineDelete />
      </IconButton> */}
    </Item>
  );
};

export default ContactsListItem;
