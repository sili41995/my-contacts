import styled from 'styled-components/native';
import formType from 'constants/formType';
import theme from '../../constants/theme';

const setInputHeight = (type) => {
  switch (type) {
    case formType.auth:
      return 60;

    case formType.addContact:
      return 50;

    case formType.editContact:
      return 50;

    default:
      break;
  }
};

const setInputBorderColor = (type, isFocused) => {
  switch (type) {
    // case formType.auth:
    //   return;

    // case formType.addContact:
    //   return;

    // case formType.editContact:
    //   return;

    default:
      return isFocused
        ? theme.primaryActiveInputBorderColor
        : 'rgba(33, 33, 33, 0.2)';
  }
};

const setInputBackgroundColor = (type, isFocused) => {
  switch (type) {
    case formType.auth:
      return isFocused ? '#fff' : '#f6f6f6';

    // case formType.addContact:
    //   return;

    // case formType.editContact:
    //   return;

    default:
      return '#f6f6f6';
  }
};

export const TextInput = styled.TextInput`
  background-color: ${({ formType, isFocused }) =>
    setInputBackgroundColor(formType, isFocused)};
  height: ${({ formType }) => setInputHeight(formType)}px;
  border: 1px solid
    ${({ formType, isFocused }) => setInputBorderColor(formType, isFocused)};
  border-radius: 8px;
  padding-left: ${({ theme }) => theme.spacing * 4}px;
  padding-right: ${({ theme }) => theme.spacing * 4}px;
  font-family: Inter-Medium;
  font-size: 20px;
  /* font-size: ${({ theme }) => theme.secondaryFontSize}px; */
`;
