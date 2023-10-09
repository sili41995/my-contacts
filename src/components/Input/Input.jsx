import React from 'react';
import { IconWrap, InputWrap, TextInput, IconContainer } from './Input.styled';
import { useState } from 'react';

const Input = ({
  iconBtnType,
  additionalIcon,
  inputWrap,
  additionalAction,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const toggleFocused = () => {
    setIsFocused((prevState) => !prevState);
  };

  const handleInputPress = () => {
    toggleFocused();
  };

  const handleWithoutInputPress = () => {
    toggleFocused();
  };

  return inputWrap ? (
    <InputWrap>
      <TextInput
        onBlur={handleWithoutInputPress}
        onFocus={handleInputPress}
        isFocused={isFocused}
        {...props}
      />
      <IconWrap activeOpacity={0.7} onPress={additionalAction}>
        <IconContainer iconBtnType={iconBtnType}>
          {additionalIcon}
        </IconContainer>
      </IconWrap>
    </InputWrap>
  ) : (
    <TextInput
      onBlur={handleWithoutInputPress}
      onFocus={handleInputPress}
      isFocused={isFocused}
      {...props}
    />
  );
};

export default Input;
