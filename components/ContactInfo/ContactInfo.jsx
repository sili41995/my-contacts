// import { Suspense } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import useTargetContact from 'hooks/useTargetContact';
import getContactInfo from '../../utils/getContactInfo';
import { getContactAvatar } from '../../utils/getAvatar';
// import Loader from 'components/Loader';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  Link,
  LinkText,
  Navigation,
} from './ContactInfo.styled';
import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import useTargetContact from '../../hooks/useTargetContact';
import ContactRouter from '../ContactRouter/ContactRouter';

const ContactInfo = () => {
  const targetContact = useTargetContact();
  const { name, role, avatar } = getContactInfo(targetContact);
  const userAvatar = getContactAvatar(avatar);

  return (
    <>
      <Image source={userAvatar} />
      <ContactTitle>
        <ContactName>{name}</ContactName>
        <ContactDesc>{role}</ContactDesc>
      </ContactTitle>
      <Navigation>
        <Link>
          <LinkText>Contact</LinkText>
        </Link>
        <Link>
          <LinkText>About</LinkText>
        </Link>
      </Navigation>
      <ContactRouter />
    </>
  );
};

export default ContactInfo;
