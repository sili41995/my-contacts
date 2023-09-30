import React from 'react';
import AuthNavigation from 'navigation/AuthNavigation';
import MainNavigation from 'navigation/MainNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import Loader from '../components/Loader/Loader';

const AppNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const screen = isLoggedIn ? <MainNavigation /> : <AuthNavigation />;

  return isRefreshing ? <Loader /> : screen;
};

export default AppNavigation;
