import React from 'react';
import useTargetContact from '../../hooks/useTargetContact';
import getContactInfo from '../../utils/getContactInfo';
import getPhoneNumber from '../../utils/getPhoneNumber';
import {
  InfoDesc,
  InfoData,
  Container,
  Field,
  IconWrap,
  InfoContainer,
} from './ContactData.styled';
import { FontAwesome5 } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button/Button';
import iconBtnType from '../../constants/iconBtnType';

const ContactData = () => {
  const targetContact = useTargetContact();
  const { number, email, chat } = getContactInfo(targetContact);
  const phoneNumber = getPhoneNumber(number);

  const handlePhoneLinkPress = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmailLinkPress = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleChatLinkPress = (link) => {
    Linking.openURL(`https://t.me/${link}`);
  };

  return (
    <Container>
      <Field>
        <InfoContainer>
          <InfoDesc>Phone number</InfoDesc>
          <InfoData>{number}</InfoData>
        </InfoContainer>
        <Button
          action={() => {
            handlePhoneLinkPress(phoneNumber);
          }}
          btnType={iconBtnType.phone}
          btnWidth={44}
        >
          <FontAwesome5 name='phone-alt' size={24} />
        </Button>
      </Field>
      <Field>
        <InfoContainer>
          <InfoDesc>Email Address</InfoDesc>
          <InfoData>{email}</InfoData>
        </InfoContainer>
        {/* <Button
          style={{ backgroundColor: '#f2e189' }}
          activeOpacity={0.7}
          onPress={() => {
            handleEmailLinkPress(email);
          }}
        >
          <IconWrap style={{ color: '#ffb422' }}>
            <Ionicons name='mail' size={24} />
          </IconWrap>
        </Button> */}
      </Field>
      <Field>
        <InfoContainer>
          <InfoDesc>Chat</InfoDesc>
          <InfoData>{chat}</InfoData>
        </InfoContainer>
        {/* <Button
          style={{ backgroundColor: '#7fd1ff' }}
          activeOpacity={0.7}
          onPress={() => {
            handleChatLinkPress(chat);
          }}
        >
          <IconWrap style={{ color: '#2681ed' }}>
            <Ionicons name='chatbubble-outline' size={24} />
          </IconWrap>
        </Button> */}
      </Field>
    </Container>
  );
};

export default ContactData;
