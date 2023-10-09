import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputFontColor = (type) => {
  switch (type) {
    case formType.addContact:
      return '#fff';

    case formType.filter:
      return '#fff';

    default:
      return theme.primaryFontColor;
  }
};

export default setInputFontColor;
