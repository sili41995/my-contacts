import styled from 'styled-components/native';
import setIconFill from '../../utils/setIconFill';
import setButtonColor from '../../utils/setButtonColor';

export const Container = styled.TouchableOpacity`
  flex-grow: ${({ btnWidth }) => (btnWidth ? 0 : 1)};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing}px;
  background-color: ${({ btnType }) => setButtonColor(btnType)};
  width: ${({ btnWidth }) => {
    console.log(btnWidth);
    return btnWidth;
  }}px;
`;

export const IconWrap = styled.Text`
  color: ${({ btnType }) => setIconFill(btnType)};
`;

export const ButtonText = styled.Text`
  font-family: Inter-Medium;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  color: ${({ theme }) => theme.primaryFontColor};
`;
