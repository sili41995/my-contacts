import React from 'react';
import { Container, IconWrap, ButtonText } from './Button.styled';

const Button = ({
  btnWidth,
  action,
  disabled,
  btnType,
  children,
  title = '',
  btnHeight,
}) => (
  <Container
    btnType={btnType}
    disabled={disabled}
    activeOpacity={0.7}
    onPress={action}
    btnWidth={btnWidth}
    btnHeight={btnHeight}
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
