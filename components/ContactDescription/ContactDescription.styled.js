import styled from 'styled-components/native';

export const Description = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;
