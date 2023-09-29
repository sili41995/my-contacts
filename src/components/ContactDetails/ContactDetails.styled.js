import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: ${({ theme }) => theme.spacing * 10}px;
  padding-bottom: ${({ isShowKeyboard, theme }) =>
    isShowKeyboard ? 0 : theme.spacing * 10}px;
  background-color: #fff;
  justify-content: ${({ isShowKeyboard }) =>
    isShowKeyboard ? 'space-between' : 'flex-start'};
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
`;
