import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.primaryColor};
  justify-content: flex-end;
  /* width: 600px;
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
  flex-direction: column;
  background-color: #fcfcfc;
  padding: ${({ theme }) => theme.spacing * 10}px;
  margin: ${({ theme }) => theme.spacing * 10}px auto;
  border-radius: 30px;
   */
`;

export const FormWrap = styled.View`
  background-color: #fff;
  padding-top: ${({ theme }) => theme.spacing * 8}px;
  padding-bottom: ${({ theme }) => theme.spacing * 20}px;
  padding-left: ${({ theme }) => theme.paddingAuthForm}px;
  padding-right: ${({ theme }) => theme.paddingAuthForm}px;
  border-radius: 25px 25px 0px 0px;
`;
