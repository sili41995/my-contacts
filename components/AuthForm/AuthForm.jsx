import { Container, FormWrap } from './AuthForm.styled';

const AuthForm = ({ children }) => (
  <Container>
    <FormWrap>{children}</FormWrap>
  </Container>
);

export default AuthForm;
