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
