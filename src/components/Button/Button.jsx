import React from 'react';
import { Container, IconWrap, ButtonText } from './Button.styled';

const Button = ({
  btnWidth,
  action,
  disabled,
  btnType,
  children,
  title = '',
}) => (
  <Container
    btnType={btnType}
    disabled={disabled}
    activeOpacity={0.7}
    onPress={action}
    btnWidth={btnWidth}
  >
    {children ? (
      <IconWrap btnType={btnType}>{children}</IconWrap>
    ) : (
      <ButtonText btnType={btnType}>{title}</ButtonText>
    )}
  </Container>
);

export default Button;
