import styled from 'styled-components/native';

export const Title = styled.View`
  /* color: ${({ theme }) => theme.primaryFontColor}; */
  /* font-family: Inter; */
  /* font-size: 20px; */
  /* font-weight: ${({ theme }) => theme.secondaryFontWeight}; */
  /* text-align: center; */
`;

export const Form = styled.View`
  /* display: flex; */
  /* flex-direction: column; */
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex-grow: 1;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing}px;
  width: auto;
`;

export const IconWrap = styled.Text`
  color: #00c938;
`;

export const ButtonText = styled.Text`
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;

export const Input = styled.TextInput`
  background-color: #f6f6f6;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  font-family: Inter-Medium;
  height: 50px;
  padding: ${({ theme }) => theme.spacing * 2}px
    ${({ theme }) => theme.spacing * 10}px;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
`;
