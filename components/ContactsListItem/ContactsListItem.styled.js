import styled from 'styled-components/native';

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  gap: ${({ theme }) => theme.primaryGap}px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border: 0.5px solid rgba(137, 137, 137, 0.43);
  padding: ${({ theme }) => theme.spacing * 3}px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 100%;
  object-fit: contain;
`;

export const ContactInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  gap: 4px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-SemiBold;
  font-size: 20px;
`;

export const Role = styled.Text`
  color: #636363;
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;

export const Phone = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter-SemiBold;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
`;
