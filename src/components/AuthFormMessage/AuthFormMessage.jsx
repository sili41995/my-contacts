import React from 'react';
import { Message, Link } from './AuthFormMessage.styled';
import { useNavigation } from '@react-navigation/native';

export const AuthFormMessage = ({ message, action, link }) => {
  const navigation = useNavigation();

  return (
    <Message
      onPress={() => {
        navigation.navigate(link);
      }}
    >
      <Link>{action}</Link> {message}
    </Message>
  );
};

export default AuthFormMessage;
