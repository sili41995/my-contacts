import React from 'react';
import PrivateLinks from '../PrivateLinks/PrivateLinks';
import { PublicLinks } from '../PublicLinks/PublicLinks';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Router = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;

  return isLoggedIn ? <PrivateLinks /> : <PublicLinks />;
};

export default Router;
