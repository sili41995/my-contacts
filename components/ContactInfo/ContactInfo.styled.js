import styled from 'styled-components/native';

export const Image = styled.Image`
  height: 100px;
  object-fit: contain;
  align-self: center;
`;

export const ContactTitle = styled.View`
  gap: ${({ theme }) => theme.spacing * 2}px;
`;

export const ContactName = styled.Text`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  text-align: center;
`;

export const ContactDesc = styled.Text`
  color: #7c7c7c;
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  text-align: center;
`;

export const Navigation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing}px;
  border-radius: 10px;
  background: #eee;
  margin-top: ${({ theme }) => theme.spacing * 20}px;
  margin-bottom: ${({ theme }) => theme.spacing * 10}px;
`;

export const List = styled.View``;

export const Link = styled.TouchableOpacity`
  background-color: #44de6f;
  padding: ${({ theme }) => theme.spacing}px
    ${({ theme }) => theme.spacing * 5}px;
  border-radius: 10px;
  /* & a {
    display: block;
    
    
    
    text-decoration: none;
    &.active,
    &:hover,
    &:focus {
      ;
    }
  } */
`;

export const LinkText = styled.Text`
  color: #555;
  font-family: Jua;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;
