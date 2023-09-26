// import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { CiEdit } from 'react-icons/ci';
import {
  Container,
  ButtonContainer,
  Button,
  IconWrap,
} from './ContactDetails.styled';
import ContactInfo from '../ContactInfo/ContactInfo';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import EditForm from '../EditForm/EditForm';
import { Keyboard } from 'react-native';
// import EditForm from 'components/EditForm';
// import ContactModalForm from 'components/ContactModalForm';
// import IconButton from 'components/IconButton';
// import makeBlur from 'utils/makeBlur';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import iconBtnType from 'constants/iconBtnType';
// import pagesPath from 'constants/pagesPath';
// import useDeleteContact from 'hooks/useDeleteContact';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ContactDetails = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [editContact, setEditContact] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  // const id = useParams()[pagesPath.dynamicParam];
  // const { search } = useLocation();
  // const path = `/${pagesPath.contactsPath + search}`;
  // const setContactId = useDeleteContact(path);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          {/* <ButtonContainer>
            {!editContact && (
              <IconButton
                disabled={isLoading}
                btnType={iconBtnType.delete}
                width={44}
                height={35}
                onBtnClick={() => {
                  setContactId(id);
                }}
              >
                <AiOutlineDelete />
              </IconButton>
            )}
            <IconButton
              btnType={iconBtnType.edit}
              width={44}
              height={35}
              onBtnClick={handleEditBtnClick}
            >
              <CiEdit />
            </IconButton>
          </ButtonContainer> */}
          <ButtonContainer>
            <Button
              style={{ backgroundColor: '#7fd1ff' }}
              // disabled={true}
              activeOpacity={0.7}
              onPress={handleEditBtnClick}
            >
              <IconWrap style={{ color: '#2681ed' }}>
                {<AntDesign name='edit' size={35} />}
              </IconWrap>
            </Button>
            <Button style={{ backgroundColor: '#ff9192' }} activeOpacity={0.7}>
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
