import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: ${({ theme }) => theme.spacing * 10}px;
  background-color: #fff;
  justify-content: flex-start;
  gap: 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  /* display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing * 28}px; */
`;

export const Button = styled.TouchableOpacity`
  /* height: 35px; */
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing}px;
`;

export const IconWrap = styled.Text`
  /* color: #00c938; */
`;
