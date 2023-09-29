import React from 'react';
import getContactInfo from 'utils/getContactInfo';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
} from './ContactsListItem.styled';

const ContactsListItem = ({ contact }) => {
  const navigation = useNavigation();
  const { userAvatar, name, id, role, number } = getContactInfo(contact);

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
    </Item>
  );
};

export default ContactsListItem;
