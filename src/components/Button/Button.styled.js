import styled from 'styled-components/native';
import setIconFill from 'utils/setIconFill';
import setButtonColor from 'utils/setButtonColor';
import iconBtnType from 'constants/iconBtnType';

export const Container = styled.TouchableOpacity`
  flex-grow: ${({ btnWidth }) => (btnWidth ? 0 : 1)};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: ${({ theme, btnType }) =>
    btnType === iconBtnType.auth ? theme.spacing * 4 : theme.spacing}px;
  background-color: ${({ btnType }) => setButtonColor(btnType)};
  width: ${({ btnWidth }) => btnWidth}px;
`;

export const IconWrap = styled.Text`
  color: ${({ btnType }) => setIconFill(btnType)};
`;

export const ButtonText = styled.Text`
  font-family: Inter-Medium;
  font-size: ${({ theme, btnType }) =>
    btnType === iconBtnType.auth ? 16 : theme.primaryFontSize}px;
  color: ${({ theme, btnType }) =>
    btnType === iconBtnType.auth ? '#fff' : theme.primaryFontColor};
`;
