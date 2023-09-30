import React from 'react';
import { Container, Spinner } from './Loader.styled';
import theme from 'constants/theme';

const Loader = () => {
  return (
    <Container>
      <Spinner size='large' color={theme.primaryColor} />
    </Container>
  );
};

export default Loader;
