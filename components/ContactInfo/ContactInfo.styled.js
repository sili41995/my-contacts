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
  /* padding: ${({ theme }) => theme.spacing}px;
  border-radius: 10px;
  background: #eee;
  margin-top: ${({ theme }) => theme.spacing * 20}px;
  margin-bottom: ${({ theme }) => theme.spacing * 10}px; */
`;

export const List = styled.View`
  /* display: flex;
  justify-content: space-between; */
`;

export const ListItem = styled.View`
  /* & a {
    display: block;
    padding: ${({ theme }) => theme.spacing}px
      ${({ theme }) => theme.spacing * 5}px;
    border-radius: 10px;
    color: #555;
    font-family: Jua;
    font-size: ${({ theme }) => theme.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.otherFontWeight};
    text-decoration: none;
    &.active,
    &:hover,
    &:focus {
      background: #44de6f;
    }
  } */
`;
