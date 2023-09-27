import React from 'react';
import ContactData from '../ContactData/ContactData';
import ContactDescription from '../ContactDescription/ContactDescription';

const ContactRouter = ({ isShowContactData }) => {
  return isShowContactData ? <ContactData /> : <ContactDescription />;
};

export default ContactRouter;
