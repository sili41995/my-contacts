import React from 'react';
import ContactData from 'components/ContactData/ContactData';
import ContactDescription from 'components/ContactDescription/ContactDescription';

const ContactRouter = ({ isShowContactData }) => {
  return isShowContactData ? <ContactData /> : <ContactDescription />;
};

export default ContactRouter;
