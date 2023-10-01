import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Button from '../Button/Button';
import iconBtnType from '../../constants/iconBtnType';
import { logoutUser } from '../../redux/auth/operations';
import { successToast } from '../../utils/toasts';

const UserProfile = () => {
  const dispatch = useDispatch();
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

  const handleLogoutBtnPress = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        successToast('Goodbye!');
      });
  };

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
      <Button
        action={handleLogoutBtnPress}
        btnType={iconBtnType.logout}
        title='Logout'
        btnHeight={50}
      >
        <SimpleLineIcons name='logout' size={24} />
      </Button>
    </UserProfileContainer>
  );
};

export default UserProfile;
