import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputFontColor = (type) => {
  switch (type) {
    case formType.addContact:
      return '#fff';

    default:
      return theme.primaryFontColor;
  }
};

export default setInputFontColor;
