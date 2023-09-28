import styled from 'styled-components/native';

export const Container = styled.View`
  gap: ${({ theme }) => theme.spacing * 5}px;
`;

export const Field = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.View``;

export const InfoDesc = styled.Text`
  color: #7c7c7c;
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;

export const InfoData = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;
