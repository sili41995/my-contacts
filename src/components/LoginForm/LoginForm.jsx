import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Form, Message, Title, Image, Input } from './LoginForm.styled';
import defaultAvatar from 'images/default-signin-avatar.png';
import { useForm, Controller } from 'react-hook-form';
import AuthFormMessage from 'components/AuthFormMessage/AuthFormMessage';
import { errorToast, successToast } from 'utils/toasts';
import { loginUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import Button from 'components/Button/Button';
import iconBtnType from 'constants/iconBtnType';

const defaultFormState = {
  defaultValues: {
    email: '',
    password: '',
  },
};

const LoginForm = ({ handleFormPress, isShowKeyboard }) => {
  const [credentials, setCredentials] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(defaultFormState);

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(loginUser(credentials));
      promise.unwrap().then(() => {
        successToast('Hello, my friend!');
      });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  return (
    <>
      <Title>log in</Title>
      <Message>Welcome to Phonebook!</Message>
      <Image source={defaultAvatar} />
      <Form>
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
            action={handleSubmit(setCredentials)}
            btnType={iconBtnType.auth}
            disabled={isLoading}
            title='Log in'
          />
        )}
      </Form>
      {!isShowKeyboard && (
        <AuthFormMessage
          link='Register'
          action={'Sign up'}
          message={"if you don't have an account yet"}
        />
      )}
    </>
  );
};

export default LoginForm;
