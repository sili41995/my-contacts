import React from 'react';
import { TextInput } from './Input.styled';
import { useState } from 'react';

const Input = (props) => {
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

  return (
    <TextInput
      onBlur={handleWithoutInputPress}
      onFocus={handleInputPress}
      isFocused={isFocused}
      {...props}
    />
  );
};

export default Input;
