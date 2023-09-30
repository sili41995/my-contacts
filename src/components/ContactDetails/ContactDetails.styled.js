import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing * 10}px;
  padding-bottom: ${({ theme }) => theme.spacing * 10}px;
  background-color: #fff;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  padding-left: ${({ theme }) => theme.spacing * 10}px;
  padding-right: ${({ theme }) => theme.spacing * 10}px;
`;
