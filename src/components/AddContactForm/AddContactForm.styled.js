import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: ${({ isShowKeyboard }) =>
    isShowKeyboard ? 'flex-end' : 'center'};
  gap: ${({ theme }) => theme.primaryGap}px;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: ${({ theme }) => theme.paddingContainer}px;
  padding-bottom: ${({ isShowKeyboard, theme }) =>
    isShowKeyboard ? 0 : theme.paddingContainer}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-SemiBold;
  font-size: 20px;
  text-align: center;
`;

export const Form = styled.View`
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding-left: ${({ theme }) => theme.spacing * 9}px;
  padding-right: ${({ theme }) => theme.spacing * 9}px;
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
