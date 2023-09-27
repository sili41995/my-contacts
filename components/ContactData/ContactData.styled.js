import styled from 'styled-components/native';

export const Container = styled.View`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: ${({ theme }) => theme.spacing * 10}px; */
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

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 44px;
  border-radius: 8px;
`;

export const IconWrap = styled.Text`
  color: #00c938;
`;
