import { useState, useEffect } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import LoginForm from '../components/LoginForm/LoginForm';
import { Keyboard } from 'react-native';

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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
    <AuthForm isShowKeyboard={isShowKeyboard}>
      <LoginForm isShowKeyboard={isShowKeyboard} />
    </AuthForm>
  );
};

export default LoginScreen;
