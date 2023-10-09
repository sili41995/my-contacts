import styled from 'styled-components/native';
import setInputFontColor from 'utils/setInputFontColor';
import setInputBackgroundColor from 'utils/setInputBackgroundColor';
import setInputBorderColor from 'utils/setInputBorderColor';
import setInputHeight from 'utils/setInputHeight';
import setInputFontSize from '../../utils/setInputFontSize';
import setInputBorderRadius from '../../utils/setInputBorderRadius';
import setIconFill from '../../utils/setIconFill';

export const TextInput = styled.TextInput`
  flex-grow: 1;
  background-color: ${({ formType, isFocused }) =>
    setInputBackgroundColor(formType, isFocused)};
  height: ${({ formType }) => setInputHeight(formType)}px;
  border: 1px solid
    ${({ formType, isFocused }) => setInputBorderColor(formType, isFocused)};
  border-radius: ${({ formType }) => setInputBorderRadius(formType)}px;
  padding-left: ${({ theme }) => theme.spacing * 4}px;
  padding-right: ${({ theme }) => theme.spacing * 4}px;
  font-family: Inter-Medium;
  font-size: ${({ formType }) => setInputFontSize(formType)}px;
  color: ${({ formType }) => setInputFontColor(formType)};
`;

export const InputWrap = styled.View`
  flex-grow: 1;
  justify-content: center;
`;

export const IconWrap = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;

export const IconContainer = styled.Text`
  color: ${({ iconBtnType }) => setIconFill(iconBtnType)};
`;
