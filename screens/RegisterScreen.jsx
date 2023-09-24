import { useState, useEffect } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import { Keyboard } from 'react-native';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterScreen = () => {
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
      <RegisterForm isShowKeyboard={isShowKeyboard} />
    </AuthForm>
  );
};

export default RegisterScreen;
