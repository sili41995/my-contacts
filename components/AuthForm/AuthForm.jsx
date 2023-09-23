import { Container, FormWrap } from './AuthForm.styled';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const AuthForm = ({ children }) => {
  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <Container>
        <FormWrap>{children}</FormWrap>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default AuthForm;
