import React from 'react';
import useTargetContact from '../../hooks/useTargetContact';
import getContactInfo from '../../utils/getContactInfo';
import getPhoneNumber from '../../utils/getPhoneNumber';
import {
  InfoDesc,
  InfoData,
  Container,
  Field,
  Button,
  IconWrap,
  InfoContainer,
} from './ContactData.styled';
// import { HiOutlinePhone } from 'react-icons/hi';
// import { IoMdMail } from 'react-icons/io';
// import { RiChat1Line } from 'react-icons/ri';
// import ActionLink from 'components/ActionLink';
// import getPhoneNumber from 'utils/getPhoneNumber';
// import getContactInfo from 'utils/getContactInfo';
// import useTargetContact from 'hooks/useTargetContact';
// import iconBtnType from 'constants/iconBtnType';
import { FontAwesome5 } from '@expo/vector-icons';
import { Linking } from 'react-native';

const ContactData = () => {
  const targetContact = useTargetContact();

  const { number, email, chat } = getContactInfo(targetContact);
  const phoneNumber = getPhoneNumber(number);

  const handlePhoneLinkPress = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <Container>
      <Field>
        <InfoContainer>
          <InfoDesc>Phone number</InfoDesc>
          <InfoData>{number}</InfoData>
        </InfoContainer>
        <Button
          style={{ backgroundColor: '#7fd1ff' }}
          // disabled={true}
          activeOpacity={0.7}
          onPress={() => {
            handlePhoneLinkPress(phoneNumber);
          }}
        >
          <IconWrap style={{ color: '#2681ed' }}>
            <FontAwesome5 name='phone-alt' size={24} />
          </IconWrap>
        </Button>
      </Field>
      {/* <Field>
         <div>
         <InfoDesc>Email Address</InfoDesc>
           <InfoData>{email}</InfoData>
       </div>
         <ActionLink link={`mailto:${email}`} btnType={iconBtnType.message}>
         <IoMdMail />
       </ActionLink>
      </Field> */}
      {/* <Field>
        <div>
          <InfoDesc>Chat</InfoDesc>
          <InfoData>{chat}</InfoData>
       </div>
        <ActionLink
           link={`tg://resolve?domain=${chat}`}
           btnType={iconBtnType.chat}
       >
          <RiChat1Line />
         </ActionLink>
      </Field> */}
    </Container>
  );
};

export default ContactData;
