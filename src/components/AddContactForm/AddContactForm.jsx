import React, { useState, useEffect } from 'react';
import {
  Input,
  Title,
  Container,
  ButtonContainer,
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
import { selectIsLoading } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { errorToast, successToast } from 'utils/toasts';
import Button from 'components/Button/Button';
import iconBtnType from 'constants/iconBtnType';

const AddContactForm = () => {
  const [newContact, setNewContact] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
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
                  autoFocus={true}
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
                action={handleSubmit(setNewContact)}
                btnType={iconBtnType.accept}
                disabled={isLoading}
              >
                <Ionicons name='checkmark' size={30} />
              </Button>
              <Button
                action={handleCancelPress}
                btnType={iconBtnType.cancel}
                disabled={isLoading}
                title='Cancel'
              />
            </ButtonContainer>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddContactForm;
