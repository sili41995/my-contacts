import React from 'react';

import { Description } from './ContactDescription.styled';
import useTargetContact from 'hooks/useTargetContact';
import getContactInfo from 'utils/getContactInfo';

const ContactDescription = () => {
  const targetContact = useTargetContact();

  const { description } = getContactInfo(targetContact);
  return <Description>{description}</Description>;
};

export default ContactDescription;
