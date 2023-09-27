import React from 'react';
import {
  Form,
  Button,
  ButtonText,
  Message,
  Title,
  Input,
} from './RegisterForm.styled';
import { useForm, Controller } from 'react-hook-form';
import AuthFormMessage from '../AuthFormMessage/AuthFormMessage';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import 'react-toastify/dist/ReactToastify.css';
// import { errorToast, successToast } from 'utils/toasts';
// import { registerUser } from 'redux/auth/operations';
// import { selectIsLoading } from 'redux/auth/selectors';
// import pagesPath from 'constants/pagesPath';

const defaultFormState = {
  defaultValues: {
    name: '',
    email: '',
    password: '',
  },
};

const RegisterForm = ({ handleFormPress, isShowKeyboard }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(defaultFormState);

  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        successToast('Hello, my friend!');
      });
  };

  return (
    <>
      <Title>sign up</Title>
      <Message>Welcome to Phonebook!</Message>
      <Form>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Login'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onFocus={handleFormPress}
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
            <Input
              placeholder='Email'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onFocus={handleFormPress}
            />
          )}
          name='email'
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder='Password'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onFocus={handleFormPress}
            />
          )}
          name='password'
        />
        {!isShowKeyboard && (
          <Button
            // disabled={isLoading}
            type='submit'
            activeOpacity={0.7}
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText>Enlist</ButtonText>
          </Button>
        )}
      </Form>
      {!isShowKeyboard && (
        <AuthFormMessage
          link='Login'
          action='Log in'
          message='if you have an account'
        />
      )}
    </>
  );
};

export default RegisterForm;
