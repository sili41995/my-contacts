import React from 'react';
import { TextInput } from './Input.styled';
import { useState } from 'react';

const Input = ({
  placeholder,
  formType,
  onBlur,
  value,
  onChangeText,
  keyboardType,
  autoFocus,
  secureTextEntry = false,
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
    onBlur();
  };

  return (
    <TextInput
      formType={formType}
      placeholder={placeholder}
      onBlur={handleWithoutInputPress}
      onChangeText={onChangeText}
      value={value}
      onFocus={handleInputPress}
      autoFocus={autoFocus}
      keyboardType={keyboardType}
      isFocused={isFocused}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
