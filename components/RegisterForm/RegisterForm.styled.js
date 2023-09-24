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

export const Button = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing * 4}px;
  background-color: ${({ theme }) => theme.primaryLinkColor};
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: Inter-Medium;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  background-color: #f6f6f6;
  height: 60px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding-left: ${({ theme }) => theme.spacing * 4}px;
  padding-right: ${({ theme }) => theme.spacing * 4}px;
  font-family: Inter-Medium;
  font-size: 20px;
`;
