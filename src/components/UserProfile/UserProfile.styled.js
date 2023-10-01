import styled from 'styled-components/native';

export const UserProfileContainer = styled.View`
  padding: ${({ theme }) => theme.paddingContainer}px;
  flex: 1;
  justify-content: flex-start;
  background-color: #fff;
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

export const UserData = styled.View`
  margin-top: ${({ theme }) => theme.spacing * 7}px;
  margin-bottom: ${({ theme }) => theme.spacing * 16}px;
`;

export const UserInfo = styled.View`
  gap: ${({ theme }) => theme.spacing * 6}px;
  margin-bottom: ${({ theme }) => theme.spacing * 10}px;
`;

export const FullName = styled.Text`
  margin-top: ${({ theme }) => theme.spacing * 2}px;
  margin-bottom: ${({ theme }) => theme.spacing}px;
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
