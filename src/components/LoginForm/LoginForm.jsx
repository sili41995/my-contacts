import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  Form,
  Message,
  Title,
  Image,
  Input,
  InputWrap,
  IconWrap,
} from './LoginForm.styled';
import defaultAvatar from 'images/default-signin-avatar.png';
import { useForm, Controller } from 'react-hook-form';
import AuthFormMessage from 'components/AuthFormMessage/AuthFormMessage';
import { errorToast, successToast } from 'utils/toasts';
import { loginUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import Button from 'components/Button/Button';
import iconBtnType from 'constants/iconBtnType';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../constants/theme';
import { useState } from 'react';

const defaultFormState = {
  defaultValues: {
    email: '',
    password: '',
  },
};

const LoginForm = ({ handleFormPress, isShowKeyboard, isFocusScreen }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [isHidePassword, setIsHidePassword] = useState(true);

  const iconName = isHidePassword ? 'md-eye-outline' : 'md-eye-off-outline';

  const handleSetSecureStatusPress = () => {
    setIsHidePassword((prevState) => !prevState);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(defaultFormState);

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        successToast('Hello, my friend!');
      });
  };

  return (
    isFocusScreen && (
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
                autoFocus={true}
                keyboardType='email-address'
              />
            )}
            name='email'
          />
          {errors.email && errorToast('Email is required')}
          <InputWrap>
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
                  secureTextEntry={isHidePassword}
                />
              )}
              name='password'
            />
            <IconWrap activeOpacity={0.7} onPress={handleSetSecureStatusPress}>
              <Ionicons
                name={iconName}
                size={24}
                color={theme.primaryLinkColor}
              />
            </IconWrap>
          </InputWrap>
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
    )
  );
};

export default LoginForm;
