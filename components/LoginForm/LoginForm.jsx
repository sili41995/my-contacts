// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import 'react-toastify/dist/ReactToastify.css';
import {
  Form,
  Button,
  ButtonText,
  Message,
  Title,
  Image,
  Input,
} from './LoginForm.styled';
import defaultAvatar from '../../assets/images/default-signin-avatar.png';
import { useForm, Controller } from 'react-hook-form';
import AuthFormMessage from '../AuthFormMessage/AuthFormMessage';
// import { errorToast, successToast } from 'utils/toasts';
// import { loginUser } from 'redux/auth/operations';
// import { selectIsLoading } from 'redux/auth/selectors';
// import pagesPath from 'constants/pagesPath';

const defaultFormState = {
  defaultValues: {
    email: '',
    password: '',
  },
};

const LoginForm = ({ handleFormPress, isShowKeyboard }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(defaultFormState);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  //   const [credentials, setCredentials] = useState(null);
  //   const isLoading = useSelector(selectIsLoading);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     setFocus('email');
  //   }, [setFocus]);
  //   useEffect(() => {
  //     if (credentials) {
  //       const promise = dispatch(loginUser(credentials));
  //       promise.unwrap().then(() => {
  //         successToast('Hello, my friend!');
  //       });
  //       return () => {
  //         promise.abort();
  //       };
  //     }
  //   }, [credentials, dispatch]);

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
            <ButtonText>Log in</ButtonText>
          </Button>
        )}
      </Form>
      {!isShowKeyboard && (
        <AuthFormMessage
          action={'Sign up'}
          // pageLink={`/${pagesPath.registerPath}`}
          message={"if you don't have an account yet"}
        />
      )}
    </>
  );
};

export default LoginForm;
