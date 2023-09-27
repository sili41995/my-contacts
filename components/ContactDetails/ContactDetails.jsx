import React, { useState, useEffect } from 'react';
import {
  Container,
  ButtonContainer,
  Button,
  IconWrap,
} from './ContactDetails.styled';
import ContactInfo from '../ContactInfo/ContactInfo';
import { AntDesign } from '@expo/vector-icons';
import EditForm from '../EditForm/EditForm';
import { Keyboard } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useTargetContact from '../../hooks/useTargetContact';
import useDeleteContact from '../../hooks/useDeleteContact';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Platform } from 'react-native';

const ContactDetails = () => {
  const targetContact = useTargetContact();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const setContactId = useDeleteContact('ContactsList');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const setEditState = () => {
    setEditContact((editContact) => !editContact);
  };

  const handleEditBtnClick = () => {
    setEditState();
  };

  const handleDeleteBtnClick = () => {
    setContactId(targetContact.id);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container isShowKeyboard={isShowKeyboard}>
          <ButtonContainer>
            <Button
              style={{ backgroundColor: '#7fd1ff' }}
              activeOpacity={0.7}
              onPress={handleEditBtnClick}
            >
              <IconWrap style={{ color: '#2681ed' }}>
                {<AntDesign name='edit' size={35} />}
              </IconWrap>
            </Button>
            <Button
              disabled={isLoading}
              onPress={handleDeleteBtnClick}
              style={{ backgroundColor: '#ff9192' }}
              activeOpacity={0.7}
            >
              <IconWrap style={{ color: '#d3232f' }}>
                <AntDesign name='deleteuser' size={35} />
              </IconWrap>
            </Button>
          </ButtonContainer>
          {editContact ? (
            <EditForm setEditContact={setEditState} />
          ) : (
            <ContactInfo />
          )}
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ContactDetails;
