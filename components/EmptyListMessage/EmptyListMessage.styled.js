import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  justify-content: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  text-align: center;
`;
