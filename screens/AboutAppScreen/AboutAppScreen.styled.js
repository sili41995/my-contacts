import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: 'Inter-Medium';
  font-size: 18px;
  text-align: center;
`;
