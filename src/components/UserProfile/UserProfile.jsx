import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import getUserInfo from 'utils/getUserInfo';
import {
  UserInfo,
  Email,
  FullName,
  Image,
  Name,
  ContactInfo,
  UserData,
  ContactInfoIconWrap,
  UserProfileContainer,
  ContactInfoDesc,
} from './UserProfile.styled';

const UserProfile = () => {
  const user = useSelector(selectUser);
  const {
    name,
    userAvatar,
    userName,
    email,
    dateOfBirth,
    phoneNumber,
    location,
  } = getUserInfo(user);

  return (
    <UserProfileContainer>
      <Name>{name}</Name>
      <UserData>
        <Image source={userAvatar} />
        <FullName>{userName}</FullName>
        <Email>{email}</Email>
      </UserData>
      <UserInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <Feather name='calendar' size={24} />
          </ContactInfoIconWrap>
          <ContactInfoDesc>{dateOfBirth}</ContactInfoDesc>
        </ContactInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <Feather name='phone' size={24} />
          </ContactInfoIconWrap>
          <ContactInfoDesc>{phoneNumber}</ContactInfoDesc>
        </ContactInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <SimpleLineIcons name='location-pin' size={24} />
          </ContactInfoIconWrap>
          <ContactInfoDesc>{location}</ContactInfoDesc>
        </ContactInfo>
      </UserInfo>
    </UserProfileContainer>
  );
};

export default UserProfile;
