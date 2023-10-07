import styled from 'styled-components/native';
import setInputFontColor from 'utils/setInputFontColor';
import setInputBackgroundColor from 'utils/setInputBackgroundColor';
import setInputBorderColor from 'utils/setInputBorderColor';
import setInputHeight from 'utils/setInputHeight';

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
  color: ${({ formType }) => setInputFontColor(formType)};
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
`;
