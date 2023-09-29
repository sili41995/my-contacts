import React from 'react';
import { Form, Message, Title, Input } from './RegisterForm.styled';
import { useForm, Controller } from 'react-hook-form';
import AuthFormMessage from 'components/AuthFormMessage/AuthFormMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';
import { registerUser } from 'redux/auth/operations';
import { errorToast, successToast } from 'utils/toasts';
import Button from 'components/Button/Button';
import iconBtnType from 'constants/iconBtnType';

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
        {errors.name && errorToast('Username is required')}
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
        {errors.email && errorToast('Email is required')}
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
        {errors.password &&
          errorToast(
            errors.password.type === 'required'
              ? 'Password is required'
              : 'Password minimum length is 7 characters'
          )}
        {!isShowKeyboard && (
          <Button
            action={handleSubmit(onSubmit)}
            btnType={iconBtnType.auth}
            disabled={isLoading}
            title='Enlist'
          />
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
