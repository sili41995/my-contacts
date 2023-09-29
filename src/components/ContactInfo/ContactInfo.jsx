import getContactInfo from 'utils/getContactInfo';
import { getContactAvatar } from 'utils/getAvatar';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  Link,
  LinkText,
  Navigation,
} from './ContactInfo.styled';
import React, { useState } from 'react';
import useTargetContact from 'hooks/useTargetContact';
import ContactRouter from 'components/ContactRouter/ContactRouter';

const ContactInfo = () => {
  const targetContact = useTargetContact();
  const { name, role, avatar } = getContactInfo(targetContact);
  const userAvatar = getContactAvatar(avatar);
  const [isShowContactData, setIsShowContactData] = useState(true);

  const showContactData = () => {
    setIsShowContactData(true);
  };

  const hideContactData = () => {
    setIsShowContactData(false);
  };

  const setBackgroundColor = (state) => ({
    backgroundColor: state ? '#44de6f' : 'transparent',
  });

  return (
    <>
      <Image source={userAvatar} />
      <ContactTitle>
        <ContactName>{name}</ContactName>
        <ContactDesc>{role}</ContactDesc>
      </ContactTitle>
      <Navigation>
        <Link
          onPress={showContactData}
          style={{ ...setBackgroundColor(isShowContactData) }}
        >
          <LinkText>Contact</LinkText>
        </Link>
        <Link
          onPress={hideContactData}
          style={{ ...setBackgroundColor(!isShowContactData) }}
        >
          <LinkText>About</LinkText>
        </Link>
      </Navigation>
      <ContactRouter isShowContactData={isShowContactData} />
    </>
  );
};

export default ContactInfo;
