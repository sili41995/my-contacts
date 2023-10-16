import React from 'react';
import { Container, IconWrap, ButtonText } from './Button.styled';

const Button = ({ action, btnType, children, title = '', ...otherProps }) => (
  <Container
    activeOpacity={0.7}
    btnType={btnType}
    onPress={action}
    {...otherProps}
  >
    {children ? (
      <>
        <IconWrap title={title} btnType={btnType}>
          {children}
        </IconWrap>
        <ButtonText btnType={btnType}>{title}</ButtonText>
      </>
    ) : (
      <ButtonText btnType={btnType}>{title}</ButtonText>
    )}
  </Container>
);

export default Button;
