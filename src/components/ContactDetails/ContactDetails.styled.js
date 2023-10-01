import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: ${({ theme }) => theme.spacing * 10}px;
  padding-top: ${({ theme }) => theme.spacing * 5}px;
  background-color: #fff;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
`;
