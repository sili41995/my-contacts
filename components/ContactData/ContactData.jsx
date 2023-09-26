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

const ContactData = () => {
  const targetContact = useTargetContact();

  const { number, email, chat } = getContactInfo(targetContact);
  const phoneNumber = getPhoneNumber(number);

  return (
    <Container>
      <Field>
        <InfoDesc>Phone number</InfoDesc>
        {/* <Button
          style={{ backgroundColor: '#7fd1ff' }}
          // disabled={true}
          activeOpacity={0.7}
          onPress={handleEditBtnClick}
        >
          <IconWrap style={{ color: '#2681ed' }}>
            {<AntDesign name='edit' size={35} />}
          </IconWrap>
        </Button> */}
        {/* <FontAwesome5 name='phone-alt' size={24} /> */}
        {/* 
        <div>
         
        <InfoData>{number}</InfoData>
       </div>
        <ActionLink link={`tel:${phoneNumber}`} btnType={iconBtnType.phone}>
          <HiOutlinePhone />
      </ActionLink>
    */}
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
