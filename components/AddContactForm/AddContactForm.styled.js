import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: ${({ theme }) => theme.paddingContainer}px;
  padding-bottom: ${({ isShowKeyboard, theme }) =>
    isShowKeyboard ? 0 : theme.spacing * 50}px;
`;

export const Title = styled.Text`
  /* color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.secondaryFontWeight};
  text-align: center; */
`;

export const Form = styled.View`
  /* display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px; */
`;

export const Input = styled.TextInput`
  /* width: 100%;
  height: 50px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing * 2}px
    ${({ theme }) => theme.spacing * 9}px;
  font-family: Inter;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  } */
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  /* display: flex;
  gap: ${({ theme }) => theme.spacing * 10}px;
  align-self: center;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: ${({ theme }) => theme.spacing}px;
    background: rgba(217, 217, 217, 0.58);
    border-radius: 8px;
    border-color: transparent;
    color: ${({ theme }) => theme.primaryFontColor};
    font-family: Inter;
    font-size: ${({ theme }) => theme.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.primaryFontWeight};
    text-decoration: none;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.primaryShadow};
    }
  } */
`;

export const Button = styled.TouchableOpacity`
  flex-grow: 1;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing}px;
`;

export const IconWrap = styled.Text`
  color: #00c938;
`;

export const ButtonText = styled.Text`
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
`;
