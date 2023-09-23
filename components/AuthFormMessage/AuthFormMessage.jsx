// import { Link } from 'react-router-dom';
import { Text } from 'react-native';
import { Message } from './AuthFormMessage.styled';

export const AuthFormMessage = ({ message, pageLink, action }) => (
  <Message>
    <Text to={pageLink}>{action}</Text> {message}
  </Message>
);

export default AuthFormMessage;
