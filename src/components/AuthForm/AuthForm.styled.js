import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primaryColor};
  justify-content: flex-end;
`;

export const FormWrap = styled.View`
  background-color: #fff;
  padding-top: ${({ theme }) => theme.spacing * 8}px;
  padding-bottom: ${({ theme, isShowKeyboard }) =>
    isShowKeyboard ? 0 : theme.spacing * 20}px;
  padding-left: ${({ theme }) => theme.paddingAuthForm}px;
  padding-right: ${({ theme }) => theme.paddingAuthForm}px;
  border-radius: 25px 25px 0px 0px;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
