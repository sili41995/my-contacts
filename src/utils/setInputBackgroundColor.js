import formType from 'constants/formType';

const setInputBackgroundColor = (type, isFocused) => {
  switch (type) {
    case formType.auth:
      return isFocused ? '#fff' : '#f6f6f6';

    case formType.editContact:
      return isFocused ? '#fff' : '#f6f6f6';

    case formType.addContact:
      return 'transparent';

    default:
      return '#f6f6f6';
  }
};

export default setInputBackgroundColor;
