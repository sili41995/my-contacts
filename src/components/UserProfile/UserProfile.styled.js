import styled from 'styled-components/native';

export const UserProfileContainer = styled.View`
  padding: ${({ theme }) => theme.paddingContainer}px;
  flex: 1;
  justify-content: flex-start;
  background-color: #fff;
  gap: ${({ theme }) => theme.spacing * 5}px;
`;

export const Image = styled.Image`
  height: 200px;
  object-fit: contain;
  align-self: center;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Jua;
  font-size: 35px;
`;

export const UserData = styled.View``;

export const UserInfo = styled.View`
  gap: ${({ theme }) => theme.spacing * 6}px;
`;

export const FullName = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Jua;
  font-size: 25px;
  text-align: center;
`;

export const Email = styled.Text`
  color: #7c7c7c;
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  text-align: center;
`;

export const ContactInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing * 3}px;
`;

export const ContactInfoIconWrap = styled.Text`
  color: #7c7c7c;
`;

export const ContactInfoDesc = styled.Text`
  color: #7c7c7c;
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;
