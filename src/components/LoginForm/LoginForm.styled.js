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

export const Image = styled.Image`
  height: 100px;
  object-fit: contain;
  align-self: center;
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

export const InputWrap = styled.View`
  justify-content: center;
`;

export const IconWrap = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;
