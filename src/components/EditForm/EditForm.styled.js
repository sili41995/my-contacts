import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-SemiBold;
  font-size: 20px;
  text-align: center;
`;

export const Form = styled.View`
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const Input = styled.TextInput`
  background-color: #f6f6f6;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  font-family: Inter-Medium;
  height: 50px;
  padding: ${({ theme }) => theme.spacing * 2}px
    ${({ theme }) => theme.spacing * 10}px;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
`;
