import React from 'react';
import { Form, Message, Title } from './RegisterForm.styled';
import { useForm, Controller } from 'react-hook-form';
import AuthFormMessage from 'components/AuthFormMessage/AuthFormMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';
import { registerUser } from 'redux/auth/operations';
import { errorToast, successToast } from 'utils/toasts';
import Button from 'components/Button/Button';
import iconBtnType from 'constants/iconBtnType';
import Input from 'components/Input/Input';
import formType from 'constants/formType';

const defaultFormState = {
  defaultValues: {
    name: '',
    email: '',
    password: '',
  },
};

const RegisterForm = ({ isShowKeyboard }) => {
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
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Login'
              onChangeText={onChange}
              value={value}
              autoFocus={true}
              formType={formType.auth}
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
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Email'
              onChangeText={onChange}
              value={value}
              keyboardType='email-address'
              formType={formType.auth}
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
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder='Password'
              onChangeText={onChange}
              value={value}
              formType={formType.auth}
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
