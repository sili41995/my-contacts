import React, { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Title,
  Container,
  ButtonContainer,
  ButtonText,
  IconWrap,
  Form,
} from './AddContactForm.styled';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { errorToast, successToast } from '../../utils/toasts';
import { selectIsLoading } from '../../redux/auth/selectors';

const AddContactForm = () => {
  const [newContact, setNewContact] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const handleCancelPress = () => {
    Keyboard.dismiss();
    reset();
  };

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (newContact) {
      const promise = dispatch(addContact(newContact));
      promise
        .unwrap()
        .then(() => {
          successToast('Contact added successfully');
          reset();
        })
        .catch(() => {
          errorToast('Adding a contact failed');
        });
    }
  }, [dispatch, newContact, reset]);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container isShowKeyboard={isShowKeyboard}>
          <Title>Add contact</Title>
          <Form>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder='Name'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name='name'
            />
            {errors.name && errorToast('Name is required')}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder='Phone'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name='number'
            />
            {errors.number && errorToast('Phone is required')}
            <ButtonContainer>
              <Button
                style={{ backgroundColor: '#89f2a6' }}
                disabled={isLoading}
                activeOpacity={0.7}
                onPress={handleSubmit(setNewContact)}
              >
                <IconWrap style={{ color: '#00c938' }}>
                  <Ionicons name='checkmark' size={30} />
                </IconWrap>
              </Button>
              <Button
                disabled={isLoading}
                style={{ backgroundColor: '#ff9192' }}
                activeOpacity={0.7}
                onPress={handleCancelPress}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
            </ButtonContainer>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddContactForm;
