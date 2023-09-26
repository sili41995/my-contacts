import React from 'react';
// import { useSelector } from 'react-redux';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import pagesPath from 'constants/pagesPath';
// import iconBtnType from 'constants/iconBtnType';
// import IconButton from 'components/IconButton';
// import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
import getContactInfo from '../../utils/getContactInfo';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  // const isLoading = useSelector(selectIsLoading);
  // const setContactId = useDeleteContact();

  const handleItemPress = () => {
    navigation.navigate('Contacts', {
      screen: 'Contact',
      params: { id },
    });
  };

  return (
    <Item onPress={handleItemPress}>
      <Image source={userAvatar} />
      <ContactInfo>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Phone>{number}</Phone>
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
