import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing * 4}px;
`;

export const Message = styled.Text`
  font-family: 'Inter-Medium';
  color: ${({ theme }) => theme.secondaryFontColor};
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  text-align: center;
`;
