import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-SemiBold;
  font-size: 30px;
  text-align: center;
`;

export const Message = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.primaryFontColor};
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-family: Inter-Medium;
`;

export const Form = styled.View`
  gap: ${({ theme }) => theme.primaryGap}px;
`;
