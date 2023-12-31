import iconBtnType from 'constants/iconBtnType';
import theme from '../constants/theme';

function setIconFill(btnType) {
  switch (btnType) {
    case iconBtnType.delete:
      return '#d3232f';

    case iconBtnType.edit:
      return '#2681ed';

    case iconBtnType.phone:
      return '#00c938';

    case iconBtnType.message:
      return '#ffb422';

    case iconBtnType.chat:
      return '#2681ed';

    case iconBtnType.filter:
      return '#555555';

    case iconBtnType.logout:
      return '#d3232f';

    case iconBtnType.accept:
      return '#00c938';

    case iconBtnType.cancel:
      return '#d3232f';

    case iconBtnType.deleteTransparent:
      return '#d3232f';

    case iconBtnType.auth:
      return '#fff';

    case iconBtnType.showPassword:
      return theme.primaryLinkColor;

    case iconBtnType.clearFilter:
      return '#fff';

    default:
      return 'grey';
  }
}

export default setIconFill;
