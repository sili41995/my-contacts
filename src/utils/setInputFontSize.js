import formType from 'constants/formType';

const setInputFontSize = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return 16;

    default:
      return 20;
  }
};

export default setInputFontSize;
