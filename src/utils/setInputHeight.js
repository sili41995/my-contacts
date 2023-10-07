import formType from 'constants/formType';

const setInputHeight = (type) => {
  switch (type) {
    case formType.auth:
      return 60;

    case formType.addContact:
      return 50;

    case formType.editContact:
      return 50;

    default:
      break;
  }
};

export default setInputHeight;
