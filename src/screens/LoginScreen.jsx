import React, { useState, useEffect } from 'react';
import AuthForm from 'components/AuthForm/AuthForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { Keyboard } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const isFocusScreen = useIsFocused();

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
      <LoginForm
        isShowKeyboard={isShowKeyboard}
        isFocusScreen={isFocusScreen}
      />
    </AuthForm>
  );
};

export default LoginScreen;
