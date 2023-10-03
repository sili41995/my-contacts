import styled from 'styled-components/native';
import formType from 'constants/formType';

const setInputHeight = (type) => {
  switch (type) {
    case formType.auth:
      return 60;

    case formType.addContact:
      return 50;

    default:
      break;
  }
};

export const TextInput = styled.TextInput`
  /* background-color: #f6f6f6; */
  height: ${({ formType }) => setInputHeight(formType)}px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding-left: ${({ theme }) => theme.spacing * 4}px;
  padding-right: ${({ theme }) => theme.spacing * 4}px;
  font-family: Inter-Medium;
  font-size: 20px;
  /* font-size: ${({ theme }) => theme.secondaryFontSize}px; */
`;
