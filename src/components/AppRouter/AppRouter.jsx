import React from 'react';
import PrivateLinks from 'components/PrivateLinks/PrivateLinks';
import { PublicLinks } from 'components/PublicLinks/PublicLinks';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

const AppRouter = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const links = isLoggedIn ? <PrivateLinks /> : <PublicLinks />;

  return isRefreshing ? null : links;
};

export default AppRouter;
