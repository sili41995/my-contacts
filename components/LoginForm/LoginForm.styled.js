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

export const Form = styled.View``;
/* display: flex; */
/* flex-direction: column; */
/* gap: ${({ theme }) => theme.primaryGap}px; */
/* // `; */

export const Image = styled.Image`
  height: 100px;
  object-fit: contain;
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing * 4}px;
  background-color: ${({ theme }) => theme.primaryLinkColor};
  border-radius: 12px;
  /* transition: background-color ${({ theme }) =>
    theme.transitionDurationAndFunc}; */
  /* &:hover, */
  /* &:focus { */
  /* background-color: ${({ theme }) => theme.secondaryLinkColor}; */
  /* } */
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: Inter-Medium;
  font-size: 16px;
`;

export const Input = styled.TextInput`
  height: 60px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding-left: ${({ theme }) => theme.spacing * 4}px;
  padding-right: ${({ theme }) => theme.spacing * 4}px;
  /* ${({ theme }) => theme.spacing * 10}px; */
  /* font-family: Inter; */
  /* font-weight: ${({ theme }) => theme.primaryFontWeight}; */
  /* font-size: 20px; */
  /* line-height: 1.17; */
  /* letter-spacing: 0.04em; */
  /* transition: border-color ${({ theme }) =>
    theme.transitionDurationAndFunc}; */
  /* &:active {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  } */
`;
