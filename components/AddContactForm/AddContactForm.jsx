import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { GiCheckMark } from 'react-icons/gi';
// import { useForm } from 'react-hook-form';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import 'react-toastify/dist/ReactToastify.css';
// import { errorToast, successToast } from 'utils/toasts';
// import { addContact } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import IconButton from 'components/IconButton';
// import iconBtnType from 'constants/iconBtnType';
import {
  Button,
  Form,
  Title,
  Input,
  Container,
  ButtonContainer,
  ButtonText,
  IconWrap,
} from './AddContactForm.styled';
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

const AddContactForm = () => {
  const [newContact, setNewContact] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const handleCancelPress = () => {
    reset();
  };

  const onSubmit = (data) => console.log(data);
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   setFocus,
  //   reset,
  // } = useForm();
  // const location = useLocation();
  // const goBackLink = location.state?.from || '/';

  // useEffect(() => {
  //   if (newContact) {
  //     const promise = dispatch(addContact(newContact));
  //     promise
  //       .unwrap()
  //       .then(() => {
  //         successToast('Contact added successfully');
  //         reset();
  //       })
  //       .catch(() => {
  //         errorToast('Adding a contact failed');
  //       });
  //   }
  // }, [dispatch, newContact, reset]);

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

  // useEffect(() => {
  //   setFocus('name');
  // }, [setFocus]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container isShowKeyboard={isShowKeyboard}>
          <Title>Add contact</Title>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder='Name'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name='name'
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder='Phone'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name='number'
            />
            <ButtonContainer>
              <Button
                style={{ backgroundColor: '#89f2a6' }}
                // disabled={true}
                activeOpacity={0.7}
                onPress={handleSubmit(setNewContact)}
              >
                <IconWrap>
                  <Ionicons name='checkmark' size={30} />
                </IconWrap>
              </Button>
              <Button
                // disabled={isLoading}
                style={{ backgroundColor: '#ff9192' }}
                activeOpacity={0.7}
                onPress={Keyboard.dismiss}
              >
                <ButtonText onPress={handleCancelPress}>Cancel</ButtonText>
              </Button>
            </ButtonContainer>
          </View>
        </Container>
        {/*
          {errors.name && errorToast('Name is required')}
          {errors.number && errorToast('Phone is required')}
       */}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddContactForm;
