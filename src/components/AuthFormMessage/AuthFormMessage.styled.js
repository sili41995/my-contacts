import styled from 'styled-components/native';

export const Message = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-Medium;
  font-size: 15px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.primaryLinkColor};
`;
