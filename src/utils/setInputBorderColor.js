import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputBorderColor = (type, isFocused) => {
  switch (type) {
    case formType.auth:
      return isFocused
        ? theme.primaryActiveInputBorderColor
        : 'rgba(33, 33, 33, 0.2)';

    case formType.editContact:
      return isFocused
        ? theme.primaryActiveInputBorderColor
        : 'rgba(33, 33, 33, 0.2)';

    case formType.addContact:
      return isFocused ? '#fff' : 'rgba(33, 33, 33, 0.2)';

    default:
      return 'rgba(33, 33, 33, 0.2)';
  }
};

export default setInputBorderColor;
